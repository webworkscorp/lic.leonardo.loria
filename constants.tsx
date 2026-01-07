
import React from 'react';
import { Scale, Gavel, FileText, Users, Briefcase, BookOpen, ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react';
import { Service, ValuePillar } from './types';

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "Conocimiento",
    description: "Conocer sus derechos y obligaciones para actuar con seguridad.",
    icon: <BookOpen className="w-5 h-5 text-champagne" strokeWidth={1} />
  },
  {
    title: "Prevención",
    description: "Evitar errores legales que generen costos innecesarios a futuro.",
    icon: <AlertCircle className="w-5 h-5 text-white" strokeWidth={1} />
  },
  {
    title: "Decisión",
    description: "Tomar decisiones informadas y seguras basadas en la ley.",
    icon: <CheckCircle className="w-5 h-5 text-champagne" strokeWidth={1} />
  },
  {
    title: "Control",
    description: "Afrontar procesos legales con mayor claridad y control de la situación.",
    icon: <ShieldCheck className="w-5 h-5 text-white" strokeWidth={1} />
  }
];

export const SERVICES: Service[] = [
  {
    title: "Derecho Penal",
    description: "Asesoría y representación legal en procesos penales, tanto para investigados como denunciantes. Atención de audiencias y medidas cautelares.",
    icon: <Scale className="w-6 h-6" strokeWidth={1} />
  },
  {
    title: "Derecho Corporativo",
    description: "Constitución de sociedades, contratos, cumplimiento legal y apoyo jurídico integral para operaciones comerciales y empresariales.",
    icon: <Briefcase className="w-6 h-6" strokeWidth={1} />
  },
  {
    title: "Derecho Notarial",
    description: "Formalización de actos y contratos: escrituras públicas, autenticaciones, certificaciones y trámites que requieren fe pública.",
    icon: <FileText className="w-6 h-6" strokeWidth={1} />
  },
  {
    title: "Derecho de Familia",
    description: "Divorcios, pensiones alimentarias, régimen de visitas, guarda y crianza, con un manejo responsable y conforme al marco legal.",
    icon: <Users className="w-6 h-6" strokeWidth={1} />
  }
];

export const METHODOLOGY = [
  {
    title: "Evaluación",
    description: "Evaluación clara de la situación legal específica.",
    icon: <Gavel className="w-5 h-5 text-champagne" strokeWidth={1} />
  },
  {
    title: "Explicación",
    description: "Explicación comprensible del proceso y las opciones disponibles.",
    icon: <BookOpen className="w-5 h-5 text-champagne" strokeWidth={1} />
  },
  {
    title: "Asesoría",
    description: "Asesoría estricta conforme a la legislación vigente.",
    icon: <Scale className="w-5 h-5 text-champagne" strokeWidth={1} />
  },
  {
    title: "Seguimiento",
    description: "Seguimiento responsable del caso en todas sus etapas.",
    icon: <CheckCircle className="w-5 h-5 text-champagne" strokeWidth={1} />
  }
];
