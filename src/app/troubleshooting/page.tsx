import type { Metadata } from "next";
import { AlertTriangle, CheckCircle, Flame, Snowflake, Thermometer, Wrench, Phone, Clock, DollarSign, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC Troubleshooting Guide | Furnace, AC & Boiler Problems | Air2Cool NJ",
  description:
    "Troubleshoot common HVAC problems: furnace not starting, AC not cooling, boiler issues, thermostat problems. DIY fixes & when to call Air2Cool. Serving North NJ. 24/7 emergency service (201) 787-5657.",
};

const HEATING_ISSUES = [
  {
    problem: "Furnace Won't Start or Ignite",
    icon: Flame,
    severity: "high",
    estimatedTime: "10-15 minutes",
    quickChecks: [
      "Thermostat set to HEAT and above current room temperature",
      "Circuit breaker hasn't tripped",
      "Furnace power switch is ON (looks like light switch near unit)",
      "Air filter isn't extremely dirty/clogged",
      "Gas valve is fully open (handle parallel to pipe)",
    ],
    likelyCauses: [
      "Failed igniter (most common)",
      "Dirty flame sensor",
      "Bad control board",
      "Pressure switch failure",
      "Gas valve issue",
    ],
    callIf: "Furnace still won't start after basic checks. Igniters and flame sensors require professional diagnosis and replacement.",
    proTip: "80% of no-heat calls are igniter failures. If your furnace is 5+ years old and won't ignite, this is the likely culprit.",
  },
  {
    problem: "Furnace Blowing Cold Air",
    icon: Flame,
    severity: "high",
    estimatedTime: "5-10 minutes",
    quickChecks: [
      "Thermostat set to HEAT (not just fan ON)",
      "Give it 5 minutes - furnace needs time to warm up",
      "Air filter clean (dirty filter restricts airflow)",
      "All supply vents open throughout house",
    ],
    likelyCauses: [
      "Pilot light or ignition failure",
      "Faulty gas valve",
      "Dirty flame sensor shutting off burners",
      "Ductwork disconnected or leaking",
      "Thermostat wiring issue",
    ],
    callIf: "Cold air continues after 10+ minutes. Could be ignition system failure or gas supply issue.",
    proTip: "If the blower is running but no heat comes on within 3-5 minutes, turn it OFF to avoid circulating cold air and wasting energy.",
  },
  {
    problem: "Boiler Not Firing or Producing Heat",
    icon: Flame,
    severity: "high",
    estimatedTime: "5-15 minutes",
    quickChecks: [
      "Thermostat calling for heat",
      "Boiler power and circuit breaker ON",
      "Water pressure gauge at 12-15 PSI (if hydronic)",
      "Reset button not tripped (red button)",
      "Gas valve open",
    ],
    likelyCauses: [
      "Low water pressure (hydronic systems)",
      "Failed circulator pump",
      "Air in system",
      "Bad zone valve",
      "Ignition failure",
    ],
    callIf: "Boiler pressure low, making strange noises, or not responding to thermostat. These systems are complex and require professional service.",
    proTip: "Most homeowners can safely add water to a boiler if pressure is low. Check your manual for the fill valve location - but call us if you're unsure.",
  },
  {
    problem: "Furnace Short Cycling (Turning On/Off Repeatedly)",
    icon: Flame,
    severity: "medium",
    estimatedTime: "15-20 minutes",
    quickChecks: [
      "Replace air filter if dirty",
      "Check all vents are open",
      "Thermostat not in direct sunlight or near heat source",
      "Thermostat set to AUTO (not ON)",
    ],
    likelyCauses: [
      "Dirty flame sensor",
      "Oversized furnace for home",
      "Bad thermostat",
      "Restricted airflow",
      "Failed limit switch",
    ],
    callIf: "Problem persists after filter change. Short cycling wastes gas and wears out equipment.",
    proTip: "Short cycling can reduce your furnace's lifespan by years. Address this issue quickly to avoid a costly premature replacement.",
  },
];

const COOLING_ISSUES = [
  {
    problem: "AC Not Cooling or Blowing Warm Air",
    icon: Snowflake,
    severity: "high",
    estimatedTime: "10-20 minutes",
    quickChecks: [
      "Thermostat set to COOL below current room temperature",
      "Air filter clean",
      "Circuit breakers ON (AC has 2 breakers: indoor + outdoor)",
      "Outdoor unit running (fan spinning, compressor humming)",
      "No ice on indoor or outdoor coils",
    ],
    likelyCauses: [
      "Low refrigerant (leak)",
      "Dirty condenser coils",
      "Failed compressor",
      "Frozen evaporator coil",
      "Bad capacitor",
    ],
    callIf: "Unit running but not cooling, or if you see ice. Low refrigerant requires EPA-certified technician to diagnose and repair.",
    proTip: "If your AC is over 10 years old and needs major repairs, replacement is often more cost-effective. We'll give you honest advice on repair vs. replace.",
  },
  {
    problem: "AC Won't Turn On At All",
    icon: Snowflake,
    severity: "high",
    estimatedTime: "10-15 minutes",
    quickChecks: [
      "Both circuit breakers ON (one inside, one outside)",
      "Thermostat has power (screen lit up)",
      "Thermostat batteries fresh (if wireless)",
      "Emergency shutoff switch ON (near indoor unit)",
      "Condensate drain not overflowing (safety float switch)",
    ],
    likelyCauses: [
      "Tripped breaker or blown fuse",
      "Bad thermostat or wiring",
      "Failed contactor",
      "Condensate overflow safety shutoff activated",
      "Bad capacitor",
    ],
    callIf: "No power to unit or breakers keep tripping. Could be electrical issue or failed component that needs professional diagnosis.",
    proTip: "If the breaker keeps tripping immediately when you turn on the AC, DO NOT keep resetting it. This indicates a serious electrical problem.",
  },
  {
    problem: "AC Frozen or Iced Up",
    icon: Snowflake,
    severity: "medium",
    estimatedTime: "4-6 hours (ice melt time)",
    quickChecks: [
      "Turn AC OFF immediately",
      "Set thermostat to FAN ONLY to melt ice",
      "Check if air filter extremely dirty",
      "All supply vents open",
      "Wait 4-6 hours for ice to fully melt before restarting",
    ],
    likelyCauses: [
      "Restricted airflow (dirty filter, closed vents)",
      "Low refrigerant",
      "Dirty evaporator coil",
      "Bad blower motor",
      "Thermostat set too low",
    ],
    callIf: "Ice returns after melting, or if you suspect refrigerant leak. Continuing to run a frozen AC can damage the compressor.",
    proTip: "Never chip ice off the coils! Let it melt naturally with the fan running. Chipping can damage the delicate aluminum fins.",
  },
  {
    problem: "AC Making Loud or Strange Noises",
    icon: Snowflake,
    severity: "high",
    estimatedTime: "5 minutes",
    quickChecks: [
      "Clear debris around outdoor unit",
      "Tighten any loose panels",
      "Turn OFF immediately if grinding, squealing, or banging",
      "Check if fan blades hitting something",
    ],
    likelyCauses: [
      "Loose or broken fan blade",
      "Failed compressor (grinding noise)",
      "Bad bearings (squealing)",
      "Refrigerant leak (hissing)",
      "Debris in unit",
    ],
    callIf: "Loud grinding, banging, or squealing. Turn OFF to prevent further damage. These noises indicate failing parts that need immediate attention.",
    proTip: "A loud 'BANG' when the AC starts often means a failing compressor. This is one of the most expensive repairs - we'll help you decide if repair or replacement makes sense.",
  },
];

const THERMOSTAT_ISSUES = [
  {
    problem: "Thermostat Blank Screen or Not Responding",
    icon: Thermometer,
    severity: "medium",
    estimatedTime: "5-10 minutes",
    quickChecks: [
      "Replace batteries (if wireless)",
      "Check circuit breaker for furnace/AC",
      "Look for blown fuse in furnace",
      "Make sure furnace door fully closed (safety switch)",
      "Try resetting thermostat (check manual)",
    ],
    likelyCauses: [
      "Dead batteries",
      "No power from HVAC system",
      "Blown fuse in air handler",
      "Loose wiring",
      "Failed transformer",
    ],
    callIf: "Screen stays blank after battery replacement. Could be wiring issue or blown transformer at furnace.",
    proTip: "Most thermostats beep or flash when batteries are low. Change them annually in the fall before heating season to avoid surprises.",
  },
  {
    problem: "Thermostat Not Reaching Set Temperature",
    icon: Thermometer,
    severity: "low",
    estimatedTime: "30+ minutes (testing)",
    quickChecks: [
      "Verify correct mode (HEAT in winter, COOL in summer)",
      "Check if temperature is reasonable (not set to 85° in winter)",
      "Clean air filter",
      "Make sure vents throughout house are open",
      "Thermostat not near heat sources or drafts",
    ],
    likelyCauses: [
      "Undersized HVAC system",
      "Poor insulation or air leaks",
      "Thermostat in bad location",
      "Dirty system limiting output",
      "Refrigerant leak (AC)",
    ],
    callIf: "System runs constantly but never reaches temp. May need system evaluation or thermostat relocation.",
    proTip: "If your system runs 24/7 in extreme weather but keeps you comfortable, it may just be working at capacity. This is normal and not necessarily a problem.",
  },
];

export default function TroubleshootingPage() {
  return (
    <main className="bg-white">
      {/* Sticky Call Button - Mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a
          href="tel:+12017875657"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold shadow-2xl transition-all hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          Emergency Call
        </a>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-800 to-red-800 text-white overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <AlertTriangle className="w-4 h-4" />
              HVAC TROUBLESHOOTING GUIDE
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              HVAC Not Working?
              <br />
              <span className="text-orange-300">Start Here</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Quick troubleshooting guide for common furnace, AC, and boiler problems. 
              Try these fixes first - or call Air2Cool for same-day service across North NJ.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href="tel:+12017875657"
                className="bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Emergency: (201) 787-5657
              </a>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 transition-all hover:bg-white/20"
              >
                Schedule Service
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                <Clock className="inline w-4 h-4 mr-1" />
                24/7 Emergency Service
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                <DollarSign className="inline w-4 h-4 mr-1" />
                Upfront Pricing - No Hidden Fees
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="inline w-4 h-4 mr-1" />
                Licensed Technicians
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Quick Jump Navigation */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-semibold text-gray-700">Jump to:</span>
            <a href="#heating" className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Heating Issues
            </a>
            <span className="text-gray-400">•</span>
            <a href="#cooling" className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Cooling Issues
            </a>
            <span className="text-gray-400">•</span>
            <a href="#thermostat" className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Thermostat Issues
            </a>
            <span className="text-gray-400">•</span>
            <a href="#call-pro" className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              When to Call a Pro
            </a>
          </div>
        </div>
      </section>

      {/* HEATING ISSUES */}
      <section id="heating" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Flame className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Heating Problems
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Furnace or boiler not working? Start with these troubleshooting steps.
            </p>
          </div>

          <div className="space-y-8">
            {HEATING_ISSUES.map((issue, index) => {
              const Icon = issue.icon;
              const severityConfig = {
                high: { badge: '🔴 URGENT', color: 'bg-red-100 text-red-700 border-red-300' },
                medium: { badge: '🟠 IMPORTANT', color: 'bg-orange-100 text-orange-700 border-orange-300' },
                low: { badge: '🟡 LOW PRIORITY', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' }
              }[issue.severity];

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 hover:shadow-lg transition-shadow"
                >
                  {/* Header with severity badge */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{issue.problem}</h3>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${severityConfig.color}`}>
                          {severityConfig.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Estimated troubleshooting time: {issue.estimatedTime}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Quick Checks */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Quick Checks (DIY - Try These First!)
                      </h4>
                      <ul className="space-y-2">
                        {issue.quickChecks.map((check, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-600 mt-0.5 shrink-0 font-bold">✓</span>
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Likely Causes */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        Likely Causes (Professional Repair)
                      </h4>
                      <ul className="space-y-2">
                        {issue.likelyCauses.map((cause, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-orange-600 mt-0.5 shrink-0">→</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pro Tip */}
                  {issue.proTip && (
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
                      <p className="text-sm text-blue-900">
                        <strong className="text-blue-700">💡 Pro Tip:</strong> {issue.proTip}
                      </p>
                    </div>
                  )}

                  {/* When to Call */}
                  <div className="bg-white rounded-xl p-4 border-2 border-red-300">
                    <p className="text-sm text-gray-900 mb-3">
                      <strong className="text-red-600">Call Air2Cool if:</strong> {issue.callIf}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="tel:+12017875657"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call (201) 787-5657
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                      >
                        Get Free Estimate
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COOLING ISSUES */}
      <section id="cooling" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Snowflake className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Cooling Problems
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Air conditioner not working? Here's what to check before calling.
            </p>
          </div>

          <div className="space-y-8">
            {COOLING_ISSUES.map((issue, index) => {
              const Icon = issue.icon;
              const severityConfig = {
                high: { badge: '🔴 URGENT', color: 'bg-red-100 text-red-700 border-red-300' },
                medium: { badge: '🟠 IMPORTANT', color: 'bg-orange-100 text-orange-700 border-orange-300' },
                low: { badge: '🟡 LOW PRIORITY', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' }
              }[issue.severity];

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{issue.problem}</h3>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${severityConfig.color}`}>
                          {severityConfig.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Estimated troubleshooting time: {issue.estimatedTime}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Quick Checks (DIY - Try These First!)
                      </h4>
                      <ul className="space-y-2">
                        {issue.quickChecks.map((check, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-600 mt-0.5 shrink-0 font-bold">✓</span>
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        Likely Causes (Professional Repair)
                      </h4>
                      <ul className="space-y-2">
                        {issue.likelyCauses.map((cause, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-orange-600 mt-0.5 shrink-0">→</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {issue.proTip && (
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
                      <p className="text-sm text-blue-900">
                        <strong className="text-blue-700">💡 Pro Tip:</strong> {issue.proTip}
                      </p>
                    </div>
                  )}

                  <div className="bg-white rounded-xl p-4 border-2 border-blue-300">
                    <p className="text-sm text-gray-900 mb-3">
                      <strong className="text-blue-600">Call Air2Cool if:</strong> {issue.callIf}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="tel:+12017875657"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call (201) 787-5657
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                      >
                        Get Free Estimate
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THERMOSTAT ISSUES */}
      <section id="thermostat" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Thermometer className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Thermostat Problems
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thermostat not responding or working correctly? Start here.
            </p>
          </div>

          <div className="space-y-8">
            {THERMOSTAT_ISSUES.map((issue, index) => {
              const Icon = issue.icon;
              const severityConfig = {
                high: { badge: '🔴 URGENT', color: 'bg-red-100 text-red-700 border-red-300' },
                medium: { badge: '🟠 IMPORTANT', color: 'bg-orange-100 text-orange-700 border-orange-300' },
                low: { badge: '🟡 LOW PRIORITY', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' }
              }[issue.severity];

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{issue.problem}</h3>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${severityConfig.color}`}>
                          {severityConfig.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Estimated troubleshooting time: {issue.estimatedTime}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Quick Checks (DIY - Try These First!)
                      </h4>
                      <ul className="space-y-2">
                        {issue.quickChecks.map((check, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-600 mt-0.5 shrink-0 font-bold">✓</span>
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        Likely Causes (Professional Repair)
                      </h4>
                      <ul className="space-y-2">
                        {issue.likelyCauses.map((cause, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-orange-600 mt-0.5 shrink-0">→</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {issue.proTip && (
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
                      <p className="text-sm text-blue-900">
                        <strong className="text-blue-700">💡 Pro Tip:</strong> {issue.proTip}
                      </p>
                    </div>
                  )}

                  <div className="bg-white rounded-xl p-4 border-2 border-purple-300">
                    <p className="text-sm text-gray-900 mb-3">
                      <strong className="text-purple-600">Call Air2Cool if:</strong> {issue.callIf}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="tel:+12017875657"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call (201) 787-5657
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                      >
                        Get Free Estimate
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When to Call a Pro */}
      <section id="call-pro" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Wrench className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              When to Call a Professional
            </h2>
            <p className="text-lg text-gray-600">
              Some HVAC problems require professional diagnosis and repair. Don't risk making it worse.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Call Air2Cool immediately if:</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Gas Smell</h4>
                    <p className="text-xs text-gray-600">Leave immediately, call gas company, then us</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Loud Banging/Grinding</h4>
                    <p className="text-xs text-gray-600">Turn OFF immediately - could be failing parts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Carbon Monoxide Alarm</h4>
                    <p className="text-xs text-gray-600">Leave home, call 911, then call for inspection</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Refrigerant Leak</h4>
                    <p className="text-xs text-gray-600">Requires EPA-certified tech to repair legally</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Electrical Issues</h4>
                    <p className="text-xs text-gray-600">Sparks, burning smell, breakers tripping</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Water Leaks</h4>
                    <p className="text-xs text-gray-600">Around furnace, AC, or boiler</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Basic Checks Failed</h4>
                    <p className="text-xs text-gray-600">Tried DIY steps but problem persists</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">No Power to Unit</h4>
                    <p className="text-xs text-gray-600">After checking breakers and switches</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">System Age 15+ Years</h4>
                    <p className="text-xs text-gray-600">May need replacement vs expensive repair</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Freezing/No Heat in Winter</h4>
                    <p className="text-xs text-gray-600">Don't risk pipe damage - call same day</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">High Energy Bills</h4>
                    <p className="text-xs text-gray-600">System may be inefficient or leaking</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Annual Maintenance Due</h4>
                    <p className="text-xs text-gray-600">Prevent problems before they start</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="tel:+12017875657"
              className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-2xl text-center transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold mb-1">Call Now</div>
              <div className="text-sm">(201) 787-5657</div>
            </a>

            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-2xl text-center transition-all hover:scale-105 shadow-lg"
            >
              <MessageSquare className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold mb-1">Get Free Estimate</div>
              <div className="text-sm">Schedule Online</div>
            </Link>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-2xl text-center border-2 border-gray-300">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-gray-700" />
              <div className="font-bold text-gray-900 mb-1">26+ Years</div>
              <div className="text-sm text-gray-600">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Phone className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Still Having Problems?
          </h2>
          <p className="text-xl mb-6">
            Air2Cool provides same-day HVAC repair across North New Jersey.
          </p>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">24/7 Emergency</div>
                <div className="text-white/80">Available Anytime</div>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Upfront Pricing</div>
                <div className="text-white/80">No Hidden Fees</div>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Licensed Pros</div>
                <div className="text-white/80">26+ Years Experience</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+12017875657"
              className="bg-white text-red-700 px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (201) 787-5657
            </a>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur text-white px-10 py-5 rounded-full font-semibold text-lg border-2 border-white/30 transition-all hover:bg-white/20"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Common HVAC Questions
          </h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group">
              <summary className="font-bold text-gray-900 cursor-pointer group-hover:text-blue-600 transition-colors">
                Why won't my furnace ignite?
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                Most commonly it's a failed igniter, dirty flame sensor, or gas supply issue. 
                Check your thermostat settings, circuit breakers, and gas valve first. If those 
                are okay, call a professional to diagnose the ignition system.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group">
              <summary className="font-bold text-gray-900 cursor-pointer group-hover:text-blue-600 transition-colors">
                Why is my AC freezing up?
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                AC freeze-up is usually caused by restricted airflow (dirty filter, closed vents) 
                or low refrigerant. Turn the system OFF and set to FAN ONLY to melt the ice. 
                If it happens again, call for service - continuing to run frozen damages the compressor.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group">
              <summary className="font-bold text-gray-900 cursor-pointer group-hover:text-blue-600 transition-colors">
                How often should I change my air filter?
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                Check monthly, replace when dirty. Standard 1-inch filters typically need 
                replacement every 1-3 months depending on usage, pets, and allergies. Thicker 
                filters (4-5 inches) can last 6-12 months. A dirty filter is the #1 cause of 
                HVAC problems.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group">
              <summary className="font-bold text-gray-900 cursor-pointer group-hover:text-blue-600 transition-colors">
                When should I call for emergency HVAC service?
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                Call immediately for: gas smell, carbon monoxide alarm, no heat in freezing weather, 
                water leaks, electrical sparks/burning smell, or loud grinding/banging noises. 
                Air2Cool provides 24/7 emergency service across North NJ at (201) 787-5657.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group">
              <summary className="font-bold text-gray-900 cursor-pointer group-hover:text-blue-600 transition-colors">
                Should I repair or replace my old HVAC system?
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                If your system is 15+ years old and needs major repairs, replacement is often more 
                cost-effective. We'll give you honest advice on both options, including energy savings 
                with new equipment, financing options, and long-term value. Call for a free consultation.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}