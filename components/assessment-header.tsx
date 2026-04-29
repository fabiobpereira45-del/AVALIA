"use client"

import { BookOpen, LayoutDashboard, User, ClipboardList } from "lucide-react"

interface AssessmentHeaderProps {
  studentName?: string
  studentEmail?: string
  onAdminClick?: () => void
  onStudentAreaClick?: () => void
  onEnrollClick?: () => void
}

export function AssessmentHeader({
  studentName,
  studentEmail,
  onAdminClick,
  onStudentAreaClick,
  onEnrollClick
}: AssessmentHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-primary text-primary-foreground shadow-md">
      <div className="mx-auto max-w-[1400px] px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo + Brand */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white/10 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg shrink-0 overflow-hidden bg-white">
                <img src="/avalia-logo.png" alt="AVALIA" className="h-full w-full object-contain p-1" />
              </div>
              {/* Espaço para Logo do Parceiro se necessário futuramente ou via Props */}
              <div className="hidden sm:flex flex-col pr-2">
                <p className="text-[9px] font-black text-emerald-neon uppercase tracking-[0.2em] leading-none mb-1">
                  Selo de Qualidade
                </p>
                <p className="text-sm font-black leading-none text-white tracking-tighter">
                  AVALIA <span className="text-emerald-neon">PRO</span>
                </p>
              </div>
            </div>
          </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
            {onAdminClick && (
              <button
                onClick={onAdminClick}
                className="flex items-center gap-1.5 rounded-md border border-primary-foreground/30 px-3 py-1.5 text-xs font-medium text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors"
                title="Painel do Professor"
              >
                <LayoutDashboard className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Painel do Professor</span>
              </button>
            )}
            {onStudentAreaClick && (
              <button
                onClick={onStudentAreaClick}
                className="flex items-center gap-1.5 rounded-md bg-white/20 text-white border border-white/30 px-3 py-1.5 text-xs font-bold hover:bg-white/30 transition-colors"
                title="Área do Aluno"
              >
                <User className="h-3.5 w-3.5 shrink-0" />
                <span className="hidden sm:inline">Área do Aluno</span>
              </button>
            )}
          </div>
        </div>

        {/* Student Info Bar */}
        {studentName && (
          <div className="mt-2 border-t border-primary-foreground/20 pt-2 flex items-center justify-between">
            <p className="text-xs text-primary-foreground/80">
              Aluno: <span className="font-semibold text-primary-foreground">{studentName}</span>
            </p>
            {studentEmail && (
              <p className="text-xs text-primary-foreground/60">{studentEmail}</p>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
