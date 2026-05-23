'use client'

import React, { useState } from 'react'
import { Globe, Key, BarChart3, Lock } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const chartData = [
  { time: '00:00', value: 240 },
  { time: '04:00', value: 321 },
  { time: '08:00', value: 235 },
  { time: '12:00', value: 567 },
  { time: '16:00', value: 890 },
  { time: '20:00', value: 724 },
  { time: '24:00', value: 456 },
]

function OAuthCard() {
  const [hoveredProvider, setHoveredProvider] = useState<string | null>(null)

  const providers = [
    { name: 'Google', color: 'from-blue-500 to-blue-600' },
    { name: 'GitHub', color: 'from-slate-700 to-slate-800' },
    { name: 'Microsoft', color: 'from-cyan-500 to-cyan-600' },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-bold text-lg text-foreground">OAuth in Milliseconds</h3>
          <p className="text-xs text-muted-foreground mt-1">Kinde Auth at Global Edge</p>
        </div>
        <Lock size={20} className="text-orange-500" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {providers.map((provider) => (
          <button
            key={provider.name}
            onMouseEnter={() => setHoveredProvider(provider.name)}
            onMouseLeave={() => setHoveredProvider(null)}
            className={`p-4 rounded-lg border transition-all duration-200 ${
              hoveredProvider === provider.name
                ? `bg-gradient-to-br ${provider.color} text-white border-transparent`
                : 'bg-muted/50 border-border hover:border-orange-500/50'
            }`}
          >
            <span className="text-sm font-medium">{provider.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-orange-500/5 border border-orange-500/20">
        <p className="text-xs text-muted-foreground">
          <span className="text-orange-600 dark:text-orange-400 font-bold">4ms latency</span> from any continent
        </p>
      </div>
    </div>
  )
}

function KeyGeneratorCard() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedKey, setGeneratedKey] = useState('')

  const generateKey = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setGeneratedKey('sk_prod_' + Math.random().toString(36).substring(2, 15))
      setIsGenerating(false)
    }, 600)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-bold text-lg text-foreground">Crypto Key Generator</h3>
          <p className="text-xs text-muted-foreground mt-1">Enterprise-grade tokens</p>
        </div>
        <Key size={20} className="text-orange-500" />
      </div>

      <button
        onClick={generateKey}
        disabled={isGenerating}
        className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 hover:border-orange-500/50 text-orange-600 dark:text-orange-400 font-medium text-sm transition-all duration-200 disabled:opacity-50"
      >
        {isGenerating ? 'Generating...' : 'Generate Key'}
      </button>

      {generatedKey && (
        <div className="p-3 rounded-lg bg-muted/50 border border-border font-mono text-xs text-foreground break-all">
          {generatedKey}
        </div>
      )}
    </div>
  )
}

function BillingMeterCard() {
  const usage = 67
  const limit = 10000

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold text-lg text-foreground">Micro-Billing</h3>
        <p className="text-xs text-muted-foreground mt-1">Real-time consumption</p>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">Response Time</span>
            <span className="text-sm text-orange-600 dark:text-orange-400 font-bold">4ms</span>
          </div>
          <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden border border-border">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" style={{ width: '15%' }}></div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-xs">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">{usage.toLocaleString()}</span>
            <span className="text-muted-foreground"> / {limit.toLocaleString()} requests</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function AnalyticsCard() {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-bold text-lg text-foreground">Real-time Analytics</h3>
          <p className="text-xs text-muted-foreground mt-1">Million-scale API metrics</p>
        </div>
        <BarChart3 size={20} className="text-orange-500" />
      </div>

      <ResponsiveContainer width="100%" height={120}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="time" stroke="#52525b" style={{ fontSize: '10px' }} />
          <YAxis stroke="#52525b" style={{ fontSize: '10px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#18181b',
              border: '1px solid #27272a',
              borderRadius: '6px',
            }}
            labelStyle={{ color: '#fafaf9' }}
          />
          <Area type="monotone" dataKey="value" stroke="#f97316" fillOpacity={1} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>99.999% Uptime</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">+12.5%</span>
      </div>
    </div>
  )
}

function GlobeCard() {
  const [pingCoords, setPingCoords] = useState([
    { city: 'SFO', x: 15, y: 35 },
    { city: 'LON', x: 50, y: 30 },
    { city: 'SGP', x: 75, y: 55 },
  ])

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-bold text-lg text-foreground">Global Edge Network</h3>
          <p className="text-xs text-muted-foreground mt-1">300+ deployment regions</p>
        </div>
        <Globe size={20} className="text-orange-500" />
      </div>

      <div className="relative w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-zinc-900 dark:to-zinc-800 rounded-lg border border-border overflow-hidden">
        {/* Simple globe representation */}
        <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
          <circle cx="50" cy="30" r="28" fill="none" stroke="#27272a" strokeWidth="0.5" opacity="0.5" />
          <circle cx="50" cy="30" r="20" fill="none" stroke="#27272a" strokeWidth="0.5" opacity="0.3" />

          {/* Continents (simplified) */}
          <ellipse cx="20" cy="25" rx="8" ry="6" fill="#f97316" opacity="0.1" />
          <ellipse cx="50" cy="20" rx="10" ry="8" fill="#f97316" opacity="0.1" />
          <ellipse cx="75" cy="30" rx="9" ry="7" fill="#f97316" opacity="0.1" />
        </svg>

        {/* Ping points */}
        {pingCoords.map((ping, idx) => (
          <div
            key={idx}
            className="absolute flex flex-col items-center"
            style={{ left: `${ping.x}%`, top: `${ping.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-xs text-orange-600 dark:text-orange-400 font-bold mt-1">{ping.city}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BentoGrid() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            0ms-Latency Edge Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything needed to build global-scale applications at the edge.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 2x1 OAuth Card */}
          <div className="md:col-span-2 p-6 rounded-xl bg-card border border-border hover:border-orange-500/50 hover:shadow-lg transition-all duration-300">
            <OAuthCard />
          </div>

          {/* 1x1 Key Generator */}
          <div className="p-6 rounded-xl bg-card border border-border hover:border-orange-500/50 hover:shadow-lg transition-all duration-300">
            <KeyGeneratorCard />
          </div>

          {/* 1x1 Billing Meter */}
          <div className="p-6 rounded-xl bg-card border border-border hover:border-orange-500/50 hover:shadow-lg transition-all duration-300">
            <BillingMeterCard />
          </div>

          {/* 2x1 Analytics */}
          <div className="md:col-span-2 p-6 rounded-xl bg-card border border-border hover:border-orange-500/50 hover:shadow-lg transition-all duration-300">
            <AnalyticsCard />
          </div>

          {/* 1x1 Globe */}
          <div className="md:col-span-3 lg:col-span-1 p-6 rounded-xl bg-card border border-border hover:border-orange-500/50 hover:shadow-lg transition-all duration-300">
            <GlobeCard />
          </div>
        </div>
      </div>
    </section>
  )
}
