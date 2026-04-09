import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Loader2, CheckCircle, AlertCircle, Calendar, Phone, Mail, User, MessageSquare } from 'lucide-react';
import axios from 'axios';

// const API_BASE_URL = 'http://localhost:7200';
const API_BASE_URL = 'https://dev.api.snapflo.studio';

const VIBGYOR = 'linear-gradient(to right, #8B5CF6, #6366F1, #3B82F6, #22C55E, #EAB308, #F97316, #EF4444)';

const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Full name is required')
    .transform(v => v.trim())
    .pipe(z.string().min(2, 'Name must be at least 2 characters')),
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[+]?[\d\s-]{10,}$/, 'Please enter a valid phone number'),
  studioName: z.string().optional(),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isLoading, setIsLoading] = useState(false);
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
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      studioName: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/contact`, data);
      setToast({
        show: true,
        type: 'success',
        message: 'Thank you! We will contact you shortly to schedule your demo.',
      });
      reset();
      setTimeout(() => {
        onClose();
        setToast({ show: false, type: 'success', message: '' });
      }, 3000);
    } catch (error) {
      let message = 'Something went wrong. Please try again.';
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
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Rainbow top bar */}
        <div className="h-[3px] w-full" style={{ background: VIBGYOR }} />

        {/* Header */}
        <div className="relative bg-[#FAFAF7] px-6 pt-7 pb-6 border-b border-gray-100">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-200 transition text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
              style={{ background: '#6366F1' }}
            >
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Schedule a Demo</h2>
              <p className="text-sm text-gray-500 mt-0.5">
                We'll show you how Snapflo fits your studio
              </p>
            </div>
          </div>
        </div>

        {/* Toast */}
        {toast.show && (
          <div
            className={`mx-6 mt-4 p-3.5 rounded-xl flex items-center gap-3 text-sm ${
              toast.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            )}
            <span>{toast.message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  disabled={isLoading}
                  className={`w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm ${
                    errors.name
                      ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                      : 'border-gray-200 focus:ring-indigo-400 focus:border-indigo-400'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-400`}
                  {...register('name')}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  disabled={isLoading}
                  className={`w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm ${
                    errors.email
                      ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                      : 'border-gray-200 focus:ring-indigo-400 focus:border-indigo-400'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-400`}
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  disabled={isLoading}
                  className={`w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm ${
                    errors.phone
                      ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                      : 'border-gray-200 focus:ring-indigo-400 focus:border-indigo-400'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-400`}
                  {...register('phone')}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Studio Name (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Studio Name <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Your Studio Name"
                disabled={isLoading}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-400"
                {...register('studioName')}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <textarea
                  placeholder="Tell us about your studio and what you're looking for..."
                  rows={3}
                  disabled={isLoading}
                  className={`w-full pl-9 pr-4 py-2.5 rounded-lg border resize-none text-sm ${
                    errors.message
                      ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                      : 'border-gray-200 focus:ring-indigo-400 focus:border-indigo-400'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-400`}
                  {...register('message')}
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-5 text-white px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: '#6366F1' }}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4" />
                Request Demo
              </>
            )}
          </button>

          {/* Contact Info */}
          <div className="mt-5 pt-5 border-t border-gray-100">
            <p className="text-center text-xs text-gray-400 mb-3">Or reach out directly</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 text-sm">
              <a
                href="mailto:support@snapflo.studio"
                className="flex items-center justify-center gap-1.5 text-indigo-500 hover:text-indigo-700 transition text-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                support@snapflo.studio
              </a>
              <a
                href="tel:+919003382337"
                className="flex items-center justify-center gap-1.5 text-indigo-500 hover:text-indigo-700 transition text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 9003382337
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
