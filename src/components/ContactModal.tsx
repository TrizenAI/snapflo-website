import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Loader2, CheckCircle, AlertCircle, Calendar, Phone, Mail, User, MessageSquare } from 'lucide-react';
import axios from 'axios';

// const API_BASE_URL = 'http://localhost:7200';
const API_BASE_URL = 'https://dev.api.snapflo.studio';

const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Full name is required')
    .trim()
    .min(2, 'Name must be at least 2 characters'),
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
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Schedule a Demo
            </h2>
            <p className="text-purple-100">
              Let us show you how Snapflow can transform your studio
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
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  disabled={isLoading}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                    errors.name
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:ring-purple-500 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500`}
                  {...register('name')}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  disabled={isLoading}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                    errors.email
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:ring-purple-500 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500`}
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  disabled={isLoading}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                    errors.phone
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:ring-purple-500 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500`}
                  {...register('phone')}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
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
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-purple-500 focus:border-purple-500 focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500"
                {...register('studioName')}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  placeholder="Tell us about your studio and what you're looking for..."
                  rows={4}
                  disabled={isLoading}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border resize-none ${
                    errors.message
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:ring-purple-500 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 transition disabled:bg-gray-50 disabled:text-gray-500`}
                  {...register('message')}
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Calendar className="w-5 h-5" />
                Request Demo
              </>
            )}
          </button>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-500 mb-3">
              Or reach out directly
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
              <a 
                href="mailto:hello@trizen-ai.com" 
                className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700"
              >
                <Mail className="w-4 h-4" />
                hello@trizen-ai.com
              </a>
              <a 
                href="tel:+919003382337" 
                className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700"
              >
                <Phone className="w-4 h-4" />
                +91 9003382337
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

