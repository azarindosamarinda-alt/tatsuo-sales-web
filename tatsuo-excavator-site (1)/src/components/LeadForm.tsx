import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Nama minimal 2 karakter"),
  companyName: z.string().min(2, "Nama perusahaan minimal 2 karakter"),
  whatsapp: z.string().min(9, "Nomor WhatsApp tidak valid"),
  unitNeed: z.string().min(1, "Pilih kebutuhan unit"),
  message: z.string().optional(),
});

export default function LeadForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      whatsapp: "",
      unitNeed: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Construct WhatsApp Message
    const text = `Halo Sales Tatsuo, saya ingin minta penawaran:%0A%0A*Nama:* ${values.fullName}%0A*Perusahaan:* ${values.companyName}%0A*Kebutuhan:* ${values.unitNeed}%0A*WhatsApp:* ${values.whatsapp}%0A*Pesan:* ${values.message || "-"}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/6281230857759?text=${text}`, "_blank");
    toast.success("Mengarahkan ke WhatsApp...");
  }

  return (
    <div id="request-quote" className="bg-card border-thick border-foreground p-8 shadow-hard relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-primary px-4 py-1 font-display font-bold text-sm border-l-thick border-b-thick border-foreground z-10">
        BOFU STAGE
      </div>
      
      <div className="mb-8">
        <h3 className="font-display font-black text-3xl uppercase mb-2">Minta Penawaran</h3>
        <p className="text-muted-foreground">Dapatkan harga terbaik & konsultasi gratis langsung dari ahlinya.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold uppercase">Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="rounded-none border-2 border-foreground focus-visible:ring-0 focus-visible:border-primary bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold uppercase">Nama Perusahaan</FormLabel>
                <FormControl>
                  <Input placeholder="PT. Konstruksi Jaya" {...field} className="rounded-none border-2 border-foreground focus-visible:ring-0 focus-visible:border-primary bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase">Nomor WhatsApp</FormLabel>
                  <FormControl>
                    <Input placeholder="0812..." {...field} className="rounded-none border-2 border-foreground focus-visible:ring-0 focus-visible:border-primary bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="unitNeed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase">Kebutuhan Unit</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-none border-2 border-foreground focus:ring-0 focus:border-primary bg-background">
                        <SelectValue placeholder="Pilih Tipe Unit" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Wheel Excavator">Wheel Excavator</SelectItem>
                      <SelectItem value="Crawler Excavator">Crawler Excavator</SelectItem>
                      <SelectItem value="Mini Excavator">Mini Excavator</SelectItem>
                      <SelectItem value="Wheel Crawler">Wheel Crawler Hybrid</SelectItem>
                      <SelectItem value="Grabloader">Grabloader</SelectItem>
                      <SelectItem value="Sparepart/Service">Sparepart / Service</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold uppercase">Pesan Tambahan (Opsional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Contoh: Butuh penawaran untuk 2 unit JP80-9 kirim ke Surabaya..." {...field} className="rounded-none border-2 border-foreground focus-visible:ring-0 focus-visible:border-primary bg-background min-h-[100px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full h-14 font-display font-black text-xl uppercase rounded-none border-2 border-foreground bg-primary text-foreground hover:bg-foreground hover:text-primary transition-all shadow-hard-sm hover:shadow-hard hover:-translate-y-1">
            <Send className="mr-2 h-5 w-5" /> Kirim Permintaan
          </Button>
        </form>
      </Form>
    </div>
  );
}
