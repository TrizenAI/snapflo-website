import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Loader2, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

const BASE_DOMAIN = 'snapflo.studio';
const API_BASE_URL = 'http://localhost:7200';
// const API_BASE_URL = 'https://dev.api.snapflo.studio';

const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Full name is required')
      .trim()
      .min(2, 'Name must be at least 2 characters'),
    email: z
      .string()
      .min(1, 'Email address is required')
      .email('Please enter a valid email address'),
    tenantName: z.string().min(1, 'Studio name is required'),
    domainName: z
      .string()
      .min(1, 'Domain name is required')
      .min(3, 'Domain name must be at least 3 characters')
      .max(20, 'Domain name must be at most 20 characters')
      .regex(
        /^[a-z]([a-z-]*[a-z])?$/,
        'Only lowercase letters & hyphens allowed. Cannot start or end with a hyphen'
      )
      .transform((val) => val.toLowerCase()),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      tenantName: '',
      domainName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/auth/register`, data);
      setToast({
        show: true,
        type: 'success',
        message: 'Registration successful! You can now login to your studio.',
      });
      reset();
      setTimeout(() => {
        onClose();
        setToast({ show: false, type: 'success', message: '' });
      }, 3000);
    } catch (error) {
      let message = 'Registration failed. Please try again.';
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        message = Array.isArray(error.response.data.message)
          ? error.response.data.message[0]
          : error.response.data.message;
      }
      setToast({
        show: true,
        type: 'error',
        message,
      });
      setTimeout(() => {
        setToast({ show: false, type: 'success', message: '' });
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    setToast({ show: false, type: 'success', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-red-600 px-6 py-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Create Your Studio Account
            </h2>
            <p className="text-blue-100">
              Start managing your photo studio today
            </p>
          </div>
        </div>

        {/* Toast */}
        {toast.show && (
          <div
            className={`mx-6 mt-4 p-4 rounded-lg flex items-center gap-3 ${
              toast.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            )}
            <span className="text-sm">{toast.message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="space-y-4">
            {/* Studio Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Studio Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Studio Name"
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.tenantName
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500`}
                {...register('tenantName')}
              />
              {errors.tenantName && (
                <p className="mt-1 text-sm text-red-600">{errors.tenantName.message}</p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500`}
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Domain Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Domain Name <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="yourstudio"
                  disabled={isLoading}
                  className={`flex-1 px-4 py-3 rounded-l-lg border-t border-l border-b ${
                    errors.domainName
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500`}
                  {...register('domainName')}
                />
                <span className="px-4 py-3 bg-gray-100 border border-gray-200 rounded-r-lg text-gray-500 text-sm flex items-center">
                  .{BASE_DOMAIN}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Use lowercase letters & hyphens only
              </p>
              {errors.domainName && (
                <p className="mt-1 text-sm text-red-600">{errors.domainName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500`}
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.password
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500 pr-12`}
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.confirmPassword
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500 pr-12`}
                  {...register('confirmPassword')}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

