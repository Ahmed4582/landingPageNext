"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { contactInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

// Contact section component with form and contact information
export function Contact() {
  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: ""
    }
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values)
    alert("Message sent successfully!")
    form.reset()
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Were here to answer all your questions and provide the help you need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300"
                >
                  <div
                    className={`${info.bgColor} p-4 rounded-xl ${info.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {info.icon === "phone" && <Phone className="w-6 h-6" />}
                    {info.icon === "mail" && <Mail className="w-6 h-6" />}
                    {info.icon === "map-pin" && <MapPin className="w-6 h-6" />}
                    {info.icon === "clock" && <Clock className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Full Name"
                          className="bg-white/10 text-white placeholder-white/70 border-0 focus:ring-2 focus:ring-white/50 focus:bg-white/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white/90" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Phone Number"
                          className="bg-white/10 text-white placeholder-white/70 border-0 focus:ring-2 focus:ring-white/50 focus:bg-white/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white/90" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email Address"
                          className="bg-white/10 text-white placeholder-white/70 border-0 focus:ring-2 focus:ring-white/50 focus:bg-white/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white/90" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          className="bg-white/10 text-white placeholder-white/70 border-0 focus:ring-2 focus:ring-white/50 focus:bg-white/20 resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white/90" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-white text-green-600 hover:bg-gray-100 text-lg font-semibold shadow-lg"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
