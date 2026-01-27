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
    estimatedTime: "10-15 min",
    quickChecks: [
      "Thermostat set to HEAT above room temp",
      "Circuit breaker hasn't tripped",
      "Furnace power switch ON",
      "Air filter not clogged",
      "Gas valve fully open",
    ],
    likelyCauses: [
      "Failed igniter (most common)",
      "Dirty flame sensor",
      "Bad control board",
    ],
    callIf: "Furnace still won't start. Igniters require professional replacement.",
    proTip: "80% of no-heat calls are igniter failures on 5+ year old furnaces.",
  },
  {
    problem: "Furnace Blowing Cold Air",
    icon: Flame,
    severity: "high",
    estimatedTime: "5-10 min",
    quickChecks: [
      "Thermostat set to HEAT (not FAN)",
      "Wait 5 minutes for warm-up",
      "Air filter clean",
      "All vents open",
    ],
    likelyCauses: [
      "Pilot light failure",
      "Faulty gas valve",
      "Dirty flame sensor",
    ],
    callIf: "Cold air after 10+ minutes. Likely ignition failure.",
    proTip: "Turn OFF if no heat after 5 min to avoid wasting energy.",
  },
  {
    problem: "Boiler Not Firing",
    icon: Flame,
    severity: "high",
    estimatedTime: "5-15 min",
    quickChecks: [
      "Thermostat calling for heat",
      "Power and breaker ON",
      "Water pressure 12-15 PSI",
      "Reset button not tripped",
    ],
    likelyCauses: [
      "Low water pressure",
      "Failed circulator pump",
      "Air in system",
    ],
    callIf: "Low pressure or strange noises. Complex systems need pros.",
    proTip: "You can add water if pressure is low - check manual or call us.",
  },
  {
    problem: "Furnace Short Cycling",
    icon: Flame,
    severity: "medium",
    estimatedTime: "15-20 min",
    quickChecks: [
      "Replace dirty filter",
      "All vents open",
      "Thermostat not in sunlight",
    ],
    likelyCauses: [
      "Dirty flame sensor",
      "Oversized furnace",
      "Bad thermostat",
    ],
    callIf: "Persists after filter change. Wastes gas and wears equipment.",
    proTip: "Short cycling reduces furnace lifespan by years - fix quickly!",
  },
];

const COOLING_ISSUES = [
  {
    problem: "AC Not Cooling",
    icon: Snowflake,
    severity: "high",
    estimatedTime: "10-20 min",
    quickChecks: [
      "Thermostat set to COOL",
      "Filter clean",
      "Both breakers ON",
      "Outdoor unit running",
      "No ice on coils",
    ],
    likelyCauses: [
      "Low refrigerant (leak)",
      "Dirty coils",
      "Failed compressor",
    ],
    callIf: "Running but not cooling. Refrigerant needs EPA-certified tech.",
    proTip: "10+ year old AC needing major repairs? Replacement often better.",
  },
  {
    problem: "AC Won't Turn On",
    icon: Snowflake,
    severity: "high",
    estimatedTime: "10-15 min",
    quickChecks: [
      "Both breakers ON",
      "Thermostat has power",
      "Fresh batteries",
      "Emergency shutoff ON",
    ],
    likelyCauses: [
      "Tripped breaker",
      "Bad thermostat",
      "Failed contactor",
    ],
    callIf: "No power or breakers tripping. Needs professional diagnosis.",
    proTip: "If breaker trips immediately, DON'T keep resetting - call us!",
  },
  {
    problem: "AC Frozen/Iced Up",
    icon: Snowflake,
    severity: "medium",
    estimatedTime: "4-6 hours",
    quickChecks: [
      "Turn AC OFF immediately",
      "Set to FAN ONLY",
      "Check for dirty filter",
      "Wait 4-6 hours to melt",
    ],
    likelyCauses: [
      "Restricted airflow",
      "Low refrigerant",
      "Dirty coil",
    ],
    callIf: "Ice returns. Running frozen damages compressor.",
    proTip: "Never chip ice! Let it melt naturally with fan running.",
  },
  {
    problem: "AC Making Loud Noises",
    icon: Snowflake,
    severity: "high",
    estimatedTime: "5 min",
    quickChecks: [
      "Clear debris around unit",
      "Tighten loose panels",
      "Turn OFF if grinding/banging",
    ],
    likelyCauses: [
      "Loose fan blade",
      "Failed compressor",
      "Bad bearings",
    ],
    callIf: "Grinding, banging, squealing. Turn OFF to prevent damage.",
    proTip: "Loud BANG at startup often means dying compressor.",
  },
];

const THERMOSTAT_ISSUES = [
  {
    problem: "Blank Screen",
    icon: Thermometer,
    severity: "medium",
    estimatedTime: "5-10 min",
    quickChecks: [
      "Replace batteries",
      "Check HVAC breaker",
      "Furnace door closed",
    ],
    likelyCauses: [
      "Dead batteries",
      "No power from HVAC",
      "Blown fuse",
    ],
    callIf: "Blank after battery change. Likely wiring issue.",
    proTip: "Change batteries annually in fall before heating season.",
  },
  {
    problem: "Not Reaching Temp",
    icon: Thermometer,
    severity: "low",
    estimatedTime: "30+ min",
    quickChecks: [
      "Correct mode set",
      "Clean filter",
      "All vents open",
    ],
    likelyCauses: [
      "Undersized system",
      "Poor insulation",
      "Refrigerant leak",
    ],
    callIf: "Runs constantly but never reaches temp.",
    proTip: "24/7 runtime in extreme weather may be normal for your system.",
  },
];

export default function TroubleshootingPage() {
  return (
    <main className="bg-white">
 
      {/* Hero - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-800 to-red-800 text-white overflow-hidden py-12 md:py-20">
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-3">
              <AlertTriangle className="w-3 h-3 md:w-4 md:h-4" />
              HVAC TROUBLESHOOTING
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              HVAC Not Working?
              <br />
              <span className="text-orange-300">Start Here</span>
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed mb-6 md:mb-8">
              Quick fixes for furnace, AC, and boiler problems. Try these first - or call for same-day service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <a
                href="tel:+12017875657"
                className="bg-white text-red-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg inline-flex items-center gap-2 w-full sm:w-auto text-center justify-center"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                (201) 787-5657
              </a>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white/30 w-full sm:w-auto text-center"
              >
                Schedule Service
              </Link>
            </div>


            {/* Hide badges on mobile */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-3 text-sm">
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                <Clock className="inline w-4 h-4 mr-1" />
                24/7 Emergency
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                <DollarSign className="inline w-4 h-4 mr-1" />
                Upfront Pricing
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="inline w-4 h-4 mr-1" />
                Licensed Techs
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
            {/* Scroll Indicator - Between sections */}
      <div className="py-4 flex justify-center">
        <svg className="w-8 h-8 text-red-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Quick Jump - Hide on mobile */}
      <section className="hidden md:block py-6 bg-gray-50 border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-semibold text-gray-700">Jump to:</span>
            <a href="#heating" className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Heating
            </a>
            <span className="text-gray-400">•</span>
            <a href="#cooling" className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Cooling
            </a>
            <span className="text-gray-400">•</span>
            <a href="#thermostat" className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Thermostat
            </a>
          </div>
        </div>
      </section>

      {/* HEATING ISSUES - MOBILE OPTIMIZED */}
      <section id="heating" className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <Flame className="w-12 h-12 md:w-16 md:h-16 text-red-600 mx-auto mb-3" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Heating Problems
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              Furnace or boiler not working? Try these fixes.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {HEATING_ISSUES.map((issue, index) => {
              const Icon = issue.icon;
              const severityConfig = {
                high: { badge: '🔴', color: 'bg-red-100 text-red-700' },
                medium: { badge: '🟠', color: 'bg-orange-100 text-orange-700' },
                low: { badge: '🟡', color: 'bg-yellow-100 text-yellow-700' }
              }[issue.severity];

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl md:rounded-2xl p-5 md:p-6 border-2 border-red-200"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{issue.problem}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${severityConfig.color}`}>
                          {severityConfig.badge}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">
                        {issue.estimatedTime}
                      </p>
                    </div>
                  </div>

                  {/* Checks - Single column on mobile */}
                  <div className="space-y-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Try These First:
                      </h4>
                      <ul className="space-y-1">
                        {issue.quickChecks.map((check, i) => (
                          <li key={i} className="text-xs md:text-sm text-gray-700 flex items-start gap-1.5">
                            <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hide likely causes on mobile */}
                    <div className="hidden md:block">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        Likely Causes:
                      </h4>
                      <ul className="space-y-1">
                        {issue.likelyCauses.map((cause, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-1.5">
                            <span className="text-orange-600 mt-0.5 shrink-0">→</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pro Tip - Desktop only */}
                  {issue.proTip && (
                    <div className="hidden md:block bg-blue-50 border-2 border-blue-200 rounded-lg p-3 mb-3">
                      <p className="text-sm text-blue-900">
                        <strong className="text-blue-700">💡</strong> {issue.proTip}
                      </p>
                    </div>
                  )}

                  {/* Call to action */}
                  <div className="bg-white rounded-lg p-3 border-2 border-red-300">
                    <p className="text-xs md:text-sm text-gray-900 mb-2">
                      <strong className="text-red-600">Call if:</strong> {issue.callIf}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="tel:+12017875657"
                        className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call Now
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        Get Estimate
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COOLING ISSUES - MOBILE OPTIMIZED */}
      <section id="cooling" className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <Snowflake className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto mb-3" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Cooling Problems
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              AC not working? Check these first.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {COOLING_ISSUES.map((issue, index) => {
              const Icon = issue.icon;
              const severityConfig = {
                high: { badge: '🔴', color: 'bg-red-100 text-red-700' },
                medium: { badge: '🟠', color: 'bg-orange-100 text-orange-700' },
              }[issue.severity];

              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl p-5 md:p-6 border-2 border-blue-200">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{issue.problem}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${severityConfig.color}`}>
                          {severityConfig.badge}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">{issue.estimatedTime}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Try These First:
                      </h4>
                      <ul className="space-y-1">
                        {issue.quickChecks.map((check, i) => (
                          <li key={i} className="text-xs md:text-sm text-gray-700 flex items-start gap-1.5">
                            <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden md:block">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        Likely Causes:
                      </h4>
                      <ul className="space-y-1">
                        {issue.likelyCauses.map((cause, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-1.5">
                            <span className="text-orange-600 mt-0.5 shrink-0">→</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {issue.proTip && (
                    <div className="hidden md:block bg-blue-50 border-2 border-blue-200 rounded-lg p-3 mb-3">
                      <p className="text-sm text-blue-900">
                        <strong className="text-blue-700">💡</strong> {issue.proTip}
                      </p>
                    </div>
                  )}

                  <div className="bg-white rounded-lg p-3 border-2 border-blue-300">
                    <p className="text-xs md:text-sm text-gray-900 mb-2">
                      <strong className="text-blue-600">Call if:</strong> {issue.callIf}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a href="tel:+12017875657" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        <Phone className="w-3.5 h-3.5" />
                        Call Now
                      </a>
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-semibold">
                        Get Estimate
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THERMOSTAT - MOBILE OPTIMIZED */}
      <section id="thermostat" className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <Thermometer className="w-12 h-12 md:w-16 md:h-16 text-purple-600 mx-auto mb-3" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Thermostat Problems
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              Thermostat issues? Start here.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {THERMOSTAT_ISSUES.map((issue, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-5 md:p-6 border-2 border-purple-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                    <Thermometer className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{issue.problem}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{issue.estimatedTime}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Try These:
                  </h4>
                  <ul className="space-y-1">
                    {issue.quickChecks.map((check, i) => (
                      <li key={i} className="text-xs md:text-sm text-gray-700 flex items-start gap-1.5">
                        <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-3 border-2 border-purple-300">
                  <p className="text-xs md:text-sm text-gray-900 mb-2">
                    <strong className="text-purple-600">Call if:</strong> {issue.callIf}
                  </p>
                  <a href="tel:+12017875657" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <Phone className="w-3.5 h-3.5" />
                    Call (201) 787-5657
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA - MOBILE OPTIMIZED */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Phone className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4" />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Still Having Problems?
          </h2>
          <p className="text-base md:text-xl mb-6">
            Same-day HVAC repair across North NJ.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a href="tel:+12017875657" className="bg-white text-red-700 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg w-full sm:w-auto text-center inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Call (201) 787-5657
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white/30 w-full sm:w-auto text-center">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}