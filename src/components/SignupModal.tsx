import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Loader2, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';

const BASE_DOMAIN = 'snapflo.studio';
const API_BASE_URL = 'https://api.dev.snapflo.studio';

const signupSchema = z
  .object({
    name: z.string().min(1, 'Full name is required').min(2, 'Name must be at least 2 characters'),
    email: z.string().min(1, 'Email address is required').email('Please enter a valid email address'),
    tenantName: z.string().min(1, 'Studio name is required'),
    domainName: z
      .string()
      .min(1, 'Domain name is required')
      .min(3, 'Domain name must be at least 3 characters')
      .max(20, 'Domain name must be at most 20 characters')
      .regex(/^[a-z]([a-z-]*[a-z])?$/, 'Only lowercase letters & hyphens allowed. Cannot start or end with a hyphen')
      .transform((val) => val.toLowerCase()),
    password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
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

const inputBase = 'w-full px-3 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 transition disabled:bg-gray-50 disabled:text-gray-400';
const inputNormal = `${inputBase} border-gray-200 focus:border-[#6366F1] focus:ring-[#6366F1]/25`;
const inputError  = `${inputBase} border-red-300 focus:border-red-400 focus:ring-red-400/20`;

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({
    show: false, type: 'success', message: '',
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: '', email: '', tenantName: '', domainName: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const msg = body?.message;
        throw new Error(Array.isArray(msg) ? msg[0] : msg || 'Registration failed. Please try again.');
      }
      setToast({ show: true, type: 'success', message: 'Account created! You can now log in to your studio.' });
      reset();
      setTimeout(() => { onClose(); setToast({ show: false, type: 'success', message: '' }); }, 3000);
    } catch (error) {
      setToast({ show: true, type: 'error', message: error instanceof Error ? error.message : 'Registration failed. Please try again.' });
      setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => { reset(); setToast({ show: false, type: 'success', message: '' }); onClose(); };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

        {/* Rainbow top stripe */}
        <div className="h-[3px] flex-shrink-0" style={{ background: 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)' }} />

        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <picture>
                <source srcSet="/snapflo-side-logo.webp" type="image/webp" />
                <img src="/snapflo-side-logo.png" alt="Snapflo" className="h-7 w-auto" width="450" height="150" />
              </picture>
          </div>
          <button onClick={handleClose} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <div className="flex-shrink-0 px-5 pt-3 pb-1">
          <h2 className="text-xl font-bold text-gray-900">Get started for free</h2>
          <p className="text-sm text-gray-400 mt-0.5">Everything your business needs, in one place.</p>
        </div>

        {/* Toast */}
        {toast.show && (
          <div className={`flex-shrink-0 mx-5 mt-3 px-3 py-2.5 rounded-lg flex items-center gap-2 text-sm ${
            toast.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {toast.type === 'success'
              ? <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              : <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />}
            {toast.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 pb-5 pt-3">
          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">

            {/* Studio Name */}
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Studio Name <span className="text-red-400">*</span></label>
              <input type="text" placeholder="Lumière Studio" disabled={isLoading}
                className={errors.tenantName ? inputError : inputNormal}
                {...register('tenantName')} />
              {errors.tenantName && <p className="mt-0.5 text-xs text-red-500">{errors.tenantName.message}</p>}
            </div>

            {/* Full Name */}
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name <span className="text-red-400">*</span></label>
              <input type="text" placeholder="John Doe" disabled={isLoading}
                className={errors.name ? inputError : inputNormal}
                {...register('name')} />
              {errors.name && <p className="mt-0.5 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Email <span className="text-red-400">*</span></label>
              <input type="email" placeholder="you@example.com" disabled={isLoading}
                className={errors.email ? inputError : inputNormal}
                {...register('email')} />
              {errors.email && <p className="mt-0.5 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Domain */}
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Domain <span className="text-red-400">*</span></label>
              <div className="flex">
                <input type="text" placeholder="yourstudio" disabled={isLoading}
                  className={`flex-1 min-w-0 px-3 py-2.5 text-sm rounded-l-lg border-t border-l border-b focus:outline-none focus:ring-2 transition disabled:bg-gray-50 ${
                    errors.domainName ? 'border-red-300 focus:ring-red-400/20 focus:border-red-400' : 'border-gray-200 focus:border-[#6366F1] focus:ring-[#6366F1]/25'
                  }`}
                  {...register('domainName')} />
                <span className="px-2 py-2.5 bg-gray-50 border border-gray-200 rounded-r-lg text-gray-400 flex items-center whitespace-nowrap" style={{ fontSize: '11px' }}>
                  .{BASE_DOMAIN}
                </span>
              </div>
              {errors.domainName
                ? <p className="mt-0.5 text-xs text-red-500">{errors.domainName.message}</p>
                : <p className="mt-0.5 text-xs text-gray-400">Lowercase letters & hyphens only</p>}
            </div>

            {/* Password */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Password <span className="text-red-400">*</span></label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" disabled={isLoading}
                  className={`${errors.password ? inputError : inputNormal} pr-10`}
                  {...register('password')} />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="mt-0.5 text-xs text-red-500">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Confirm Password <span className="text-red-400">*</span></label>
              <div className="relative">
                <input type={showConfirmPassword ? 'text' : 'password'} placeholder="••••••••" disabled={isLoading}
                  className={`${errors.confirmPassword ? inputError : inputNormal} pr-10`}
                  {...register('confirmPassword')} />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-0.5 text-xs text-red-500">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          {/* Submit */}
          <button type="submit" disabled={isLoading}
            className="w-full mt-4 py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
            style={{ background: '#6366F1' }}>
            {isLoading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Creating account...</>
            ) : 'Create Account'}
          </button>

          <p className="text-center text-xs text-gray-400 mt-3">
            By signing up, you agree to our{' '}
            <a href="/terms-of-service" className="text-indigo-500 hover:underline">Terms</a> &{' '}
            <a href="/privacy-policy" className="text-indigo-500 hover:underline">Privacy Policy</a>
          </p>

          <p className="text-center text-sm text-gray-500 mt-3">
            Already have an account?{' '}
            <a href="https://demo.snapflo.studio/login" target="_blank" rel="noopener noreferrer" className="text-indigo-500 font-medium hover:underline">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
