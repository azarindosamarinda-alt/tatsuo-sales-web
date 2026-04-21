import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Clock, Activity, BarChart } from "lucide-react";

export default function ProductivityCalculator() {
  // State for calculation parameters
  const [bucketSize, setBucketSize] = useState<string>("0.3"); // q
  const [fillFactor, setFillFactor] = useState<string>("0.9"); // K
  const [efficiency, setEfficiency] = useState<number>(0.83); // E
  const [cycleTime, setCycleTime] = useState<number>(18); // Ts
  
  // State for project estimation
  const [targetVolume, setTargetVolume] = useState<number>(500); // m3
  const [dailyHours, setDailyHours] = useState<number>(7); // hours/day

  // Calculate Productivity (Q)
  const q = parseFloat(bucketSize);
  const k = parseFloat(fillFactor);
  const productivityPerHour = (3600 * q * k * efficiency) / cycleTime;
  
  // Calculate Project Duration
  const totalHours = targetVolume / productivityPerHour;
  const totalDays = totalHours / dailyHours;

  return (
    <div className="bg-muted/30 border-thick border-foreground p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 bg-primary px-4 py-1 font-display font-bold text-sm border-r-thick border-b-thick border-foreground z-10">
        SIMULASI PRODUKTIVITAS
      </div>
      
      <div className="mb-8 mt-4">
        <h3 className="font-display font-black text-3xl uppercase mb-2 flex items-center gap-3">
          <Calculator className="h-8 w-8 text-primary fill-foreground" />
          Kalkulator Kinerja
        </h3>
        <p className="text-muted-foreground">Hitung estimasi produksi galian per jam dan durasi proyek Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Label className="font-bold uppercase">1. Kapasitas Bucket (q)</Label>
            <Select value={bucketSize} onValueChange={setBucketSize}>
              <SelectTrigger className="rounded-none border-2 border-foreground bg-background">
                <SelectValue placeholder="Pilih ukuran bucket" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.07">0.07 m³ (Mini JP20)</SelectItem>
                <SelectItem value="0.12">0.12 m³ (Mini JP40)</SelectItem>
                <SelectItem value="0.25">0.25 m³ (Small JP60)</SelectItem>
                <SelectItem value="0.3">0.30 m³ (Standard JP80)</SelectItem>
                <SelectItem value="0.45">0.45 m³ (Medium JP120)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Label className="font-bold uppercase">2. Kondisi Tanah / Fill Factor (K)</Label>
            <Select value={fillFactor} onValueChange={setFillFactor}>
              <SelectTrigger className="rounded-none border-2 border-foreground bg-background">
                <SelectValue placeholder="Pilih kondisi tanah" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1.0">Mudah / Gembur (1.0)</SelectItem>
                <SelectItem value="0.9">Tanah Biasa (0.9)</SelectItem>
                <SelectItem value="0.8">Tanah Liat / Keras (0.8)</SelectItem>
                <SelectItem value="0.6">Berbatu / Cadas (0.6)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="font-bold uppercase">3. Efisiensi Kerja (E)</Label>
              <span className="font-mono font-bold bg-primary px-2 text-xs">{(efficiency * 100).toFixed(0)}%</span>
            </div>
            <Slider 
              value={[efficiency]} 
              onValueChange={(vals) => setEfficiency(vals[0])} 
              max={1} 
              step={0.01} 
              className="py-4"
            />
            <p className="text-xs text-muted-foreground">Geser sesuai kondisi operator & alat (Standard: 83%)</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="font-bold uppercase">4. Waktu Siklus / Cycle Time (Ts)</Label>
              <span className="font-mono font-bold bg-primary px-2 text-xs">{cycleTime} Detik</span>
            </div>
            <Slider 
              value={[cycleTime]} 
              onValueChange={(vals) => setCycleTime(vals[0])} 
              min={10}
              max={60} 
              step={1} 
              className="py-4"
            />
            <p className="text-xs text-muted-foreground">Waktu rata-rata untuk 1x gerakan gali-buang (Standard: 15-20 detik)</p>
          </div>
        </div>

        {/* Result Section */}
        <div className="bg-card border-2 border-foreground p-6 shadow-hard flex flex-col justify-between">
          <div>
            <h4 className="font-display font-bold text-xl uppercase mb-6 border-b-2 border-dashed border-foreground/20 pb-2">
              Hasil Perhitungan
            </h4>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-muted p-4 border border-foreground/10">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Produktivitas</p>
                <p className="text-3xl font-black font-display text-primary">
                  {productivityPerHour.toFixed(1)} <span className="text-sm text-foreground">m³/jam</span>
                </p>
              </div>
              <div className="bg-muted p-4 border border-foreground/10">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Produktivitas (8 Jam)</p>
                <p className="text-2xl font-black font-display text-foreground">
                  {(productivityPerHour * 8).toFixed(1)} <span className="text-sm text-muted-foreground">m³/hari</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold uppercase text-sm">Estimasi Proyek</h5>
              <div className="flex gap-4 items-center">
                <Input 
                  type="number" 
                  value={targetVolume} 
                  onChange={(e) => setTargetVolume(Number(e.target.value))}
                  className="w-32 rounded-none border-2 border-foreground bg-background font-mono"
                />
                <span className="font-bold text-sm">m³ (Total Volume)</span>
              </div>
              
              <div className="bg-foreground text-background p-4 mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium opacity-80">Durasi Kerja:</span>
                  <span className="font-mono font-bold text-primary text-lg">{totalHours.toFixed(1)} Jam</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium opacity-80">Estimasi Hari ({dailyHours} jam/hari):</span>
                  <span className="font-mono font-bold text-primary text-xl">{totalDays.toFixed(1)} Hari</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-muted-foreground italic border-t border-dashed border-foreground/30 pt-4">
            *Perhitungan ini adalah estimasi teoritis. Hasil aktual di lapangan dapat bervariasi tergantung kondisi cuaca, keterampilan operator, dan faktor eksternal lainnya.
          </div>
        </div>
      </div>
    </div>
  );
}
