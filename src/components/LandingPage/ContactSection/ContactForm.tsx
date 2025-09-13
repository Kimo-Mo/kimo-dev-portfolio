'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';
import { Label } from '@/components/ui';
import { AnimatedWrapper } from '@/components/shared';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const contactSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Name is required' })
    .min(3, { message: 'Name is too short' }),
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email' }),
  message: z
    .string()
    .nonempty({ message: 'Message is required' })
    .min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    setLoading(true);
    setStatus('Sending...');
    try {
      const res = await emailjs.send(
        serviceId,
        templateId,
        { ...values },
        publicKey
      );
      if (res.status === 200) {
        setStatus('✅ Message sent successfully!');
        reset();
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Failed to send. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col bg-gradient py-10 px-12 rounded-2xl text-background w-full">
      <AnimatedWrapper from="left">
        <h2 className="text-3xl lg:text-5xl font-bold uppercase mb-6">
          Any projects?
        </h2>
      </AnimatedWrapper>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <AnimatedWrapper from="left">
          <Label
            htmlFor="name"
            className={`uppercase text-sm text-background ${
              errors.name && 'text-error'
            }`}>
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            className={`text-background ${errors.name && 'border-error'}`}
            {...register('name')}
          />
          {errors.name && (
            <p className="text-error text-xs mt-1">{errors.name.message}</p>
          )}
        </AnimatedWrapper>

        <AnimatedWrapper from="left">
          <Label
            htmlFor="email"
            className={`uppercase text-sm text-background ${
              errors.email && 'text-error'
            }`}>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            className={`text-background ${errors.email && 'border-error'}`}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-error text-xs mt-1">{errors.email.message}</p>
          )}
        </AnimatedWrapper>

        <AnimatedWrapper from="left">
          <Label
            htmlFor="message"
            className={`uppercase text-sm text-background ${
              errors.message && 'text-error'
            }`}>
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Write your message..."
            className={`resize-none text-background overflow-y-auto break-words break-all ${
              errors.message && 'border-error'
            }`}
            rows={4}
            {...register('message')}
          />
          {errors.message && (
            <p className="text-error text-xs mt-1">{errors.message.message}</p>
          )}
        </AnimatedWrapper>

        <AnimatedWrapper from="left">
          <Button
            type="submit"
            size="lg"
            className="group cursor-pointer capitalize rounded"
            disabled={loading}>
            Submit
            <MoveUpRight
              className="-me-1 w-fit transition-transform duration-150 group-hover:translate-x-1 bg-gradient size-6"
              size={24}
              color="var(--primary-foreground)"
              aria-hidden="true"
            />
          </Button>
        </AnimatedWrapper>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
};

export default ContactForm;
