import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  ClipboardCheck,
  BrainCircuit,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const movementQualityTrend = [
  { week: "Week 1", x: 10, y: 120, label: "30" },
  { week: "Week 2", x: 60, y: 96, label: "36" },
  { week: "Week 3", x: 110, y: 104, label: "34" },
  { week: "Week 4", x: 160, y: 92, label: "37" },
  { week: "Week 5", x: 210, y: 64, label: "43" },
  { week: "Week 6", x: 260, y: 44, label: "48" },
  { week: "Week 7", x: 310, y: 28, label: "52" },
];

const rtmCodes = [
  {
    code: "98975",
    description: "Device setup + patient education",
    status: "Unlocked",
  },
  {
    code: "98985",
    description: "RTM data transmission: 2-15 days",
    status: "Unlocked",
  },
  {
    code: "98977",
    description: "RTM data transmission: 16-30 days",
    status: "Locked",
  },
  {
    code: "98979",
    description: "Treatment management: 10-19 minutes",
    status: "Unlocked",
  },
  {
    code: "98980",
    description: "Treatment management: 20-39 minutes",
    status: "Unlocked",
  },
  {
    code: "98981",
    description: "Additional treatment management time",
    status: "Locked",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
        light ? "text-sky-300" : "text-sky-700"
      }`}
    >
      {children}
    </p>
  );
}

function Button({ children, variant = "solid", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2";

  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
      : "bg-sky-700 text-white hover:bg-sky-800";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] backdrop-blur md:p-7"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sky-300 shadow-sm">
        <Icon size={22} />
      </div>

      <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="leading-8 text-slate-600">{children}</p>
    </motion.div>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-3 shadow-[0_40px_120px_-50px_rgba(2,132,199,0.55)] backdrop-blur sm:rounded-[2.25rem] sm:p-5">
        <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-sky-300/20 blur-3xl" />

        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-4 text-white sm:rounded-[1.75rem] sm:p-6">
          <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6 sm:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-[0.24em]">
                Stroke Rehabilitation Dashboard
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Upper-Limb Activity
              </h2>
            </div>

            <HeartPulse className="shrink-0 text-sky-300" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.35rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-400/15 to-white/5 p-4 shadow-inner sm:rounded-[1.5rem] sm:p-5">
              <p className="text-sm text-emerald-100">
                Movement Quantity Score
              </p>

              <p className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                92 min
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[92%] rounded-full bg-emerald-400" />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 text-xs text-emerald-100 sm:text-sm">
                <span>Daily Score</span>
                <span>92 / 100 min</span>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-sky-300/20 bg-gradient-to-br from-sky-400/15 to-white/5 p-4 shadow-inner sm:rounded-[1.5rem] sm:p-5">
              <p className="text-sm text-sky-100">Movement Quality Score</p>

              <p className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                65
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-sky-400" />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 text-xs text-sky-100 sm:text-sm">
                <span>Daily Score</span>
                <span>Previous: 62</span>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[1.35rem] bg-white p-4 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:rounded-[1.5rem] sm:p-5">
            <div className="mb-5 rounded-[1.25rem] bg-gradient-to-br from-sky-700 to-slate-900 p-4 text-white shadow-lg sm:rounded-[1.4rem] sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-sky-100">
                    Home Program Adherence
                  </p>

                  <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                    76%
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-sm text-sky-100">
                    19 of 25 sessions completed
                  </p>
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[76%] rounded-full bg-white" />
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold sm:text-base">
                Quality Score - Weekly Average
              </p>

              <BarChart3 className="shrink-0 text-sky-700" />
            </div>

            <div className="relative h-44 rounded-[1.25rem] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-3 shadow-inner sm:h-48 sm:rounded-[1.4rem] sm:p-4">
              <div className="absolute left-4 right-4 top-1/4 border-t border-dashed border-slate-200" />
              <div className="absolute left-4 right-4 top-1/2 border-t border-dashed border-slate-200" />
              <div className="absolute left-4 right-4 top-3/4 border-t border-dashed border-slate-200" />

              <svg
                viewBox="0 0 320 140"
                className="relative z-10 h-full w-full overflow-visible"
              >
                <polyline
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="10,120 60,96 110,104 160,92 210,64 260,44 310,28"
                />

                {movementQualityTrend.map((point) => (
                  <g key={point.week}>
                    <circle cx={point.x} cy={point.y} r="5" fill="#0284c7" />
                    <text
                      x={point.x}
                      y={point.y - 12}
                      textAnchor="middle"
                      className="fill-slate-500 text-[11px] font-semibold"
                    >
                      {point.label}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="mt-2 grid grid-cols-7 text-center text-[10px] text-slate-400 sm:text-xs">
                {movementQualityTrend.map((point) => (
                  <span key={point.week}>{point.week.replace("Week ", "W")}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WearablePhoto() {
  return (
    <div className="mt-10 hidden justify-start lg:flex">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_35px_100px_-45px_rgba(15,23,42,0.65)]">
        <img
          src="/wearable.png"
          alt="Person wearing a rehabilitation wearable device"
          className="h-[420px] w-[520px] object-cover"
        />
      </div>
    </div>
  );
}

function RTMVisualization() {
  return (
    <div className="relative rounded-[1.75rem] border border-white/10 bg-white/10 p-3 shadow-[0_40px_120px_-50px_rgba(14,165,233,0.45)] backdrop-blur sm:rounded-[2.25rem] sm:p-4">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-sky-400/10 blur-3xl" />

      <div className="rounded-[1.5rem] bg-white p-4 text-slate-900 sm:rounded-[1.75rem] sm:p-5">
        <div className="mb-5 flex items-start justify-between gap-4 sm:items-center">
          <div>
            <p className="text-sm font-medium text-slate-500">
              RTM Documentation
            </p>

            <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
              April 2026 RTM Summary
            </h3>
          </div>

          <ClipboardCheck className="shrink-0 text-sky-700" />
        </div>

        <div className="grid gap-2">
          <div className="rounded-[1.25rem] border border-slate-200/80 bg-white p-3 shadow-sm sm:rounded-[1.4rem]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  Device Setup + Education
                </p>

                <p className="text-xs font-medium text-sky-700">CPT 98975</p>
              </div>

              <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Complete
              </span>
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-slate-200/80 bg-white p-4 shadow-sm sm:rounded-[1.4rem]">
            <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  Transmission Days
                </p>

                <p className="text-xs font-medium text-sky-700">
                  CPT 98985 / 98977
                </p>
              </div>

              <span className="text-sm font-bold text-sky-700">
                12 / 2 days
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-full rounded-full bg-sky-600" />
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-slate-200/80 bg-white p-4 shadow-sm sm:rounded-[1.4rem]">
            <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  Treatment Management Time
                </p>

                <p className="text-xs font-medium text-sky-700">
                  CPT 98979 / 98980 / 98981
                </p>
              </div>

              <span className="text-sm font-bold text-sky-700">24 min</span>
            </div>

            <div className="mt-3 rounded-2xl bg-slate-100 p-3">
              <button className="w-full rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800">
                + Log Additional Treatment Time
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.35rem] bg-gradient-to-br from-slate-950 to-slate-900 p-4 text-white shadow-lg sm:rounded-[1.5rem]">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-300">
                RTM Code Eligibility
              </p>

              <p className="text-xl font-bold">Billing Thresholds Met</p>
            </div>

            <button className="w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:w-auto">
              Export Documentation
            </button>
          </div>

          <div className="grid gap-2">
            {rtmCodes.map((item) => (
              <div
                key={item.code}
                className="flex flex-col gap-3 rounded-2xl bg-white/5 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold">{item.code}</p>

                  <p className="text-xs leading-5 text-slate-400">
                    {item.description}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Locked"
                      ? "bg-red-500/20 text-red-300"
                      : "bg-emerald-500/20 text-emerald-300"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LumidLandingPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_32%),linear-gradient(to_bottom,_#f8fafc,_#ffffff,_#f8fafc)] text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-2xl sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-70"
          >
            <img
              src="/Logo.png"
              alt="Lumid Health Logo"
              className="h-16 w-16 shrink-0 object-contain sm:h-24 sm:w-24 lg:h-40 lg:w-40"
            />

            <div className="min-w-0 text-left">
              <p className="truncate text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                LumidHealth
              </p>

              <p className="mt-1 hidden text-sm font-medium text-slate-500 sm:block">
                Stroke recovery, measured daily
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#problem" className="hover:text-sky-700">
              Problem
            </a>

            <a href="#solution" className="hover:text-sky-700">
              Solution
            </a>

            <a href="#clinics" className="hover:text-sky-700">
              For Clinics
            </a>

            <a href="#research" className="hover:text-sky-700">
              Research
            </a>

            <a href="#contact" className="hover:text-sky-700">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-start gap-10 px-4 pb-20 pt-12 sm:px-6 md:grid-cols-2 md:gap-14 md:pb-28 md:pt-24">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 max-w-2xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Continuous upper-limb monitoring for stroke rehabilitation.
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              Lumid helps therapists understand how patients use their affected
              arm outside the clinic through wearable sensing, objective
              recovery insights, and RTM documentation support.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact">
                <Button className="w-full px-6 py-4 text-base sm:w-auto">
                  Talk to Us <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>

              <a href="#research">
                <Button
                  variant="outline"
                  className="w-full px-6 py-4 text-base sm:w-auto"
                >
                  View Clinical Studies
                </Button>
              </a>
            </div>
          </motion.div>

          <WearablePhoto />

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Rendered images shown are conceptual representations of the LumidOne
            system and may differ from the final device.
          </p>
        </div>

        <div className="relative">
          <HeroDashboard />
        </div>
      </section>

      <section
        id="problem"
        className="scroll-mt-28 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 py-20 text-white md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionLabel light>The problem</SectionLabel>

          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Stroke recovery does not only happen during clinic visits.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Therapists often rely on episodic assessments and patient
              self-report to understand recovery. That leaves a gap between what
              happens in the clinic and how patients actually use their affected
              limb throughout daily life.
            </p>
          </div>
        </div>
      </section>

      <section
        id="solution"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 md:py-28"
      >
        <SectionLabel>The Lumid system</SectionLabel>

        <h2 className="mb-10 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          A wearable, mobile app, and clinician dashboard built around objective
          daily movement insights.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard icon={Activity} title="Wearable sensing">
            A wrist-worn sensor continuously captures upper-limb accelerometer
            and gyroscope data throughout daily activity and rehabilitation
            exercises.
          </FeatureCard>

          <FeatureCard
            icon={BrainCircuit}
            title="Clinically tested ML biomarkers"
          >
            Proprietary machine learning biomarkers transform continuous
            wearable kinematic data into objective measures of movement quantity
            and movement quality, validated through established research.
          </FeatureCard>

          <FeatureCard icon={BarChart3} title="Recovery insights">
            The clinician dashboard visualizes longitudinal recovery trends,
            home program adherence, and objective daily movement metrics outside
            the clinic.
          </FeatureCard>
        </div>
      </section>

      <section
        id="clinics"
        className="scroll-mt-28 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 py-20 text-white md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionLabel light>For rehabilitation clinics</SectionLabel>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Built to support better care and cleaner RTM workflows.
              </h2>

              <p className="text-lg leading-8 text-slate-300">
                Lumid is designed for therapists who need objective home
                activity data, faster documentation, and a practical way to
                support remote therapeutic monitoring programs.
              </p>
            </div>

            <RTMVisualization />
          </div>
        </div>
      </section>

      <section
        id="research"
        className="scroll-mt-28 border-t border-slate-200 bg-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionLabel>Research and papers</SectionLabel>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Built from award-winning research at UMass Amherst.
              </h2>

              <p className="text-lg leading-8 text-slate-600">
                Lumid Health originated from research conducted in the AHHA Lab
                within the Manning College of Information and Computer Sciences
                at UMass Amherst.
              </p>

              <a
                href="https://www.cics.umass.edu/organizations/ahha-lab"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-2xl border border-slate-200 p-4 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                  Research Lab
                </p>

                <p className="mt-2 text-lg font-semibold text-slate-950">
                  Advanced Human and Health Analytics (AHHA) Lab
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Researches wearable sensing systems, clinical biomarkers, and
                  computational health analytics.
                </p>
              </a>
            </div>

            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.5)] sm:p-7">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Research Foundation
                  </p>

                  <h3 className="text-2xl font-bold text-slate-950">
                    Publications
                  </h3>
                </div>

                <ShieldCheck className="shrink-0 text-sky-700" />
              </div>

              <div className="grid gap-3">
                <a
                  href="https://www.medrxiv.org/content/10.1101/2025.01.13.25320461v1"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                    (Under review) Science Translational Medicine
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    Continuous Upper-Limb Monitoring for Stroke Rehabilitation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Objective movement biomarkers derived from wearable
                    accelerometer data for stroke recovery monitoring.
                  </p>
                </a>

                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/39109662/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                    Neurorehabil Neural Repair
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    Wearable-Based Kinematic Analysis of Upper-Limb Movements
                    During Daily Activities Could Provide Insights into Stroke
                    Survivors&apos; Motor Ability
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Explores a new wearable-based approach for objectively and
                    reliably assessing upper-limb motor ability in stroke
                    survivors using a single inertial sensor placed on the
                    stroke-affected wrist.
                  </p>
                </a>

                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/36264782/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                    Neurorehabil Neural Repair
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    Envisioning the Use of In-Situ Arm Movement Data in Stroke
                    Rehabilitation: Stroke Survivors’ and Occupational
                    Therapists’ Perspectives
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Interviews with occupational therapists and stroke survivors
                    revealed high receptiveness and usability for a wrist-worn
                    monitoring system.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="rounded-[2rem] bg-gradient-to-br from-sky-700 via-sky-800 to-slate-950 p-5 text-white shadow-[0_40px_120px_-45px_rgba(2,132,199,0.65)] sm:rounded-[2.5rem] sm:p-8 md:p-14">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_1.25fr] md:gap-12">
            <div>
              <h2 className="mb-5 text-4xl font-black tracking-tight sm:text-5xl">
                Partner with us.
              </h2>

              <p className="text-lg leading-8 text-sky-50 sm:text-xl sm:leading-9">
                We are working with stroke therapists, clinic owners,
                rehabilitation researchers, and caregivers to build a more
                objective future for stroke recovery monitoring.
              </p>

              <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Lumid Health
                </p>

                <p className="mt-3 text-lg leading-8 text-slate-200">
                  A UMass Amherst spinout developing clinically tested
                  biomarkers and wearables for stroke rehabilitation.
                </p>
              </div>
            </div>

            <div
              id="contact"
              className="scroll-mt-28 rounded-[1.75rem] bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-10"
            >
              <h3 className="mb-3 text-3xl font-bold tracking-tight">
                Request a conversation
              </h3>

              <p className="mb-8 text-lg leading-8 text-slate-600 sm:mb-10">
                Interested in piloting, advising, collaborating, or learning
                more about Lumid Health?
              </p>

              <div className="grid gap-6">
                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50/80 p-5 transition hover:-translate-y-1 hover:shadow-xl sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                    <img
                      src="/Ivan.jpg"
                      alt="Ivan Lee"
                      className="h-28 w-28 shrink-0 rounded-3xl border border-slate-200 object-cover shadow-lg sm:h-32 sm:w-32"
                    />

                    <div className="pt-1">
                      <h4 className="text-2xl font-bold tracking-tight text-slate-950">
                        Ivan Lee
                      </h4>

                      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-sky-700">
                        Co-Founder
                      </p>

                      <p className="mt-4 break-all text-sm font-medium text-slate-500">
                        ivan@lumid.health
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50/80 p-5 transition hover:-translate-y-1 hover:shadow-xl sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                    <img
                      src="/Jason.jpg"
                      alt="Jason Huang"
                      className="h-28 w-28 shrink-0 rounded-3xl border border-slate-200 object-cover shadow-lg sm:h-32 sm:w-32"
                    />

                    <div className="pt-1">
                      <h4 className="text-2xl font-bold tracking-tight text-slate-950">
                        Jason Huang
                      </h4>

                      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-sky-700">
                        Co-Founder
                      </p>

                      <p className="mt-4 break-all text-sm font-medium text-slate-500">
                        jason@lumid.health
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                className="mt-10 w-full rounded-2xl bg-slate-950 py-5 text-base font-semibold shadow-lg hover:bg-slate-800"
                onClick={() => {
                  window.location.href = "mailto:jason@lumid.health";
                }}
              >
                Contact Lumid Health
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 text-sm text-slate-500 sm:px-6 md:flex-row">
          <p>© 2026 Lumid Health. All rights reserved.</p>

          <p>Continuous monitoring for stroke rehabilitation workflows.</p>
        </div>
      </footer>
    </main>
  );
}