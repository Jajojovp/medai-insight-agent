
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Share2, BookOpen, ChevronLeft, ChevronRight, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface BlogPostProps {
  id: string;
}

interface BlogArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  author: string;
  image: string;
  tags: string[];
  summary: string;
}

const TableOfContents = ({ content }: { content: string }) => {
  const headings = React.useMemo(() => {
    const regex = /^(#{1,3})\s+(.+)$/gm;
    const matches = [];
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      matches.push({ level, text, id });
    }
    
    return matches;
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <Card className="p-6 sticky top-24 blog-card">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <BookOpen className="w-4 h-4" />
        Tabla de Contenidos
      </h3>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <a
            key={index}
            href={`#${heading.id}`}
            className={`block text-sm hover:text-blue-600 transition-colors ${
              heading.level === 1 ? 'font-medium' : 
              heading.level === 2 ? 'ml-3' : 'ml-6'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </Card>
  );
};

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="reading-progress h-full" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const SocialShare = ({ title, url }: { title: string; url: string }) => {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Compartir:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`, '_blank')}
      >
        <Share2 className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
      >
        <Heart className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
      >
        <MessageCircle className="w-4 h-4" />
      </Button>
    </div>
  );
};

const formatContent = (content: string) => {
  return content
    .split('\n\n')
    .map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        const text = paragraph.replace('# ', '');
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return `<h1 id="${id}">${text}</h1>`;
      }
      if (paragraph.startsWith('## ')) {
        const text = paragraph.replace('## ', '');
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return `<h2 id="${id}">${text}</h2>`;
      }
      if (paragraph.startsWith('### ')) {
        const text = paragraph.replace('### ', '');
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return `<h3 id="${id}">${text}</h3>`;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(item => 
          item.startsWith('- ') ? `<li>${item.replace('- ', '')}</li>` : item
        );
        return `<ul>${items.join('')}</ul>`;
      }
      return `<p>${paragraph}</p>`;
    })
    .join('');
};

const BlogPost: React.FC<BlogPostProps> = ({ id }) => {
  const [article, setArticle] = useState<BlogArticle | null>(null);

  // Datos de ejemplo mejorados con contenido completo
  const articles: BlogArticle[] = [
    {
      id: 'diabetes-intro',
      title: 'Diabetes Tipo 2: Guía Completa para el Manejo y Prevención',
      category: 'Endocrinología',
      date: '2024-01-15',
      readTime: 12,
      author: 'Dr. María González',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=400&fit=crop',
      tags: ['diabetes', 'endocrinología', 'prevención', 'tratamiento'],
      summary: 'Una guía completa sobre la diabetes tipo 2, incluyendo factores de riesgo, síntomas, tratamiento y estrategias de prevención.',
      content: `# Diabetes Tipo 2: Guía Completa para el Manejo y Prevención

La diabetes tipo 2 es una condición crónica que afecta la manera en que el cuerpo procesa el azúcar en sangre (glucosa). Esta enfermedad metabólica representa uno de los mayores desafíos de salud pública del siglo XXI, afectando a más de 400 millones de personas a nivel mundial.

## ¿Qué es la Diabetes Tipo 2?

La diabetes tipo 2 se caracteriza por la resistencia a la insulina y la deficiencia relativa de insulina. A diferencia de la diabetes tipo 1, donde el páncreas no produce insulina, en la diabetes tipo 2 el cuerpo sí produce insulina, pero no la utiliza eficazmente o no produce suficiente cantidad.

### Fisiopatología de la Diabetes Tipo 2

El desarrollo de la diabetes tipo 2 involucra varios mecanismos complejos:

- **Resistencia a la insulina**: Los tejidos periféricos (músculo, hígado, tejido adiposo) desarrollan resistencia a la acción de la insulina
- **Disfunción de células beta**: Las células beta del páncreas gradualmente pierden su capacidad de producir insulina
- **Producción hepática aumentada**: El hígado produce glucosa en exceso
- **Inflamación crónica**: Estados inflamatorios contribuyen al desarrollo de resistencia insulínica

## Factores de Riesgo

Los factores de riesgo para diabetes tipo 2 se pueden clasificar en modificables y no modificables:

### Factores No Modificables

- **Edad**: El riesgo aumenta después de los 45 años
- **Antecedentes familiares**: Historia familiar de diabetes tipo 2
- **Etnia**: Mayor prevalencia en hispanos, afroamericanos, nativos americanos
- **Historia de diabetes gestacional**: Mujeres que desarrollaron diabetes durante el embarazo

### Factores Modificables

- **Sobrepeso y obesidad**: Especialmente obesidad abdominal (IMC ≥25 kg/m²)
- **Sedentarismo**: Falta de actividad física regular
- **Alimentación inadecuada**: Dieta rica en carbohidratos refinados y grasas saturadas
- **Síndrome metabólico**: Combinación de factores de riesgo cardiovascular
- **Hipertensión arterial**: Presión arterial ≥140/90 mmHg
- **Dislipidemia**: Niveles alterados de colesterol y triglicéridos

## Síntomas y Manifestaciones Clínicas

La diabetes tipo 2 puede desarrollarse gradualmente, y muchas personas pueden no experimentar síntomas inicialmente. Los síntomas más comunes incluyen:

### Síntomas Clásicos

- **Poliuria**: Aumento en la frecuencia urinaria
- **Polidipsia**: Sed excesiva
- **Polifagia**: Aumento del apetito
- **Pérdida de peso inexplicable**: A pesar del aumento del apetito

### Síntomas Adicionales

- **Fatiga y debilidad**: Sensación constante de cansancio
- **Visión borrosa**: Cambios en la agudeza visual
- **Cicatrización lenta**: Heridas que tardan en sanar
- **Infecciones recurrentes**: Especialmente infecciones de la piel y tracto urinario
- **Hormigueo en extremidades**: Síntomas de neuropatía temprana

## Diagnóstico

El diagnóstico de diabetes tipo 2 se basa en criterios específicos establecidos por organizaciones médicas internacionales:

### Criterios Diagnósticos

- **Glucosa plasmática en ayunas**: ≥126 mg/dL (7.0 mmol/L)
- **Prueba de tolerancia oral a la glucosa**: ≥200 mg/dL (11.1 mmol/L) a las 2 horas
- **Hemoglobina A1c**: ≥6.5% (48 mmol/mol)
- **Glucosa plasmática aleatoria**: ≥200 mg/dL con síntomas clásicos

### Pruebas de Laboratorio Adicionales

- **Perfil lipídico completo**: Evaluación de factores de riesgo cardiovascular
- **Función renal**: Creatinina sérica y filtrado glomerular estimado
- **Microalbuminuria**: Detección temprana de nefropatía diabética
- **Función hepática**: Evaluación antes de iniciar ciertos medicamentos

## Tratamiento Integral

El manejo de la diabetes tipo 2 requiere un enfoque multidisciplinario que incluye cambios en el estilo de vida, educación diabetológica y tratamiento farmacológico cuando sea necesario.

### Modificaciones del Estilo de Vida

#### Alimentación Saludable

- **Planificación de comidas**: Distribución equilibrada de carbohidratos a lo largo del día
- **Control de porciones**: Uso de métodos como el plato diabético
- **Selección de carbohidratos**: Preferencia por carbohidratos complejos y de bajo índice glucémico
- **Limitación de azúcares añadidos**: Reducción de bebidas azucaradas y alimentos procesados
- **Aumento de fibra**: Inclusión de frutas, verduras, legumbres y granos enteros

#### Actividad Física Regular

- **Ejercicio aeróbico**: Mínimo 150 minutos por semana de intensidad moderada
- **Ejercicio de resistencia**: 2-3 sesiones por semana
- **Actividades de flexibilidad**: Yoga, tai chi o estiramientos
- **Reducción del sedentarismo**: Interrumpir períodos prolongados de inactividad

### Tratamiento Farmacológico

#### Medicamentos de Primera Línea

**Metformina**: Considerada el tratamiento inicial de elección
- Mecanismo: Reduce la producción hepática de glucosa y mejora la sensibilidad a la insulina
- Dosis: Inicio con 500-850 mg una o dos veces al día, incremento gradual
- Beneficios adicionales: Pérdida de peso modesta, mejora del perfil lipídico

#### Medicamentos de Segunda Línea

**Sulfonilureas**: Estimulan la secreción de insulina
- Ejemplos: Glibenclamida, gliclazida, glimepirida
- Consideraciones: Riesgo de hipoglucemia y aumento de peso

**Inhibidores de DPP-4**: Aumentan las hormonas incretinas
- Ejemplos: Sitagliptina, vildagliptina, linagliptina
- Ventajas: Bajo riesgo de hipoglucemia, peso neutro

**Agonistas del receptor GLP-1**: Mimetizan la acción del GLP-1
- Ejemplos: Liraglutida, semaglutida, dulaglutida
- Beneficios: Pérdida de peso significativa, protección cardiovascular

**Inhibidores de SGLT-2**: Bloquean la reabsorción renal de glucosa
- Ejemplos: Empagliflozina, dapagliflozina, canagliflozina
- Beneficios adicionales: Pérdida de peso, protección cardiovascular y renal

### Monitoreo y Seguimiento

#### Automonitoreo Glucémico

- **Frecuencia**: Individualizada según el tratamiento y control glucémico
- **Objetivos**: Glucosa preprandial 80-130 mg/dL, posprandial <180 mg/dL
- **Educación**: Interpretación de resultados y ajustes de tratamiento

#### Evaluaciones Periódicas

- **Hemoglobina A1c**: Cada 3-6 meses, objetivo <7% en la mayoría de adultos
- **Presión arterial**: En cada visita, objetivo <130/80 mmHg
- **Perfil lipídico**: Anualmente o más frecuente si está alterado
- **Función renal**: Creatinina y microalbuminuria anualmente

## Complicaciones de la Diabetes

### Complicaciones Microvasculares

#### Retinopatía Diabética
- **Prevalencia**: Principal causa de ceguera en adultos en edad laboral
- **Screening**: Examen oftalmológico anual con dilatación pupilar
- **Prevención**: Control glucémico estricto y control de presión arterial

#### Nefropatía Diabética
- **Progresión**: Desde microalbuminuria hasta enfermedad renal terminal
- **Monitoreo**: Filtrado glomerular estimado y excreción urinaria de albúmina
- **Tratamiento**: Inhibidores de ECA o ARA-II, control glucémico y de presión arterial

#### Neuropatía Diabética
- **Tipos**: Neuropatía distal simétrica, neuropatía autonómica
- **Síntomas**: Dolor, hormigueo, pérdida de sensibilidad
- **Prevención**: Control glucémico óptimo desde el diagnóstico

### Complicaciones Macrovasculares

#### Enfermedad Cardiovascular
- **Riesgo aumentado**: 2-4 veces mayor riesgo de eventos cardiovasculares
- **Prevención**: Control multifactorial (glucosa, presión arterial, lípidos)
- **Tratamiento**: Estatinas, antiagregantes plaquetarios si está indicado

## Prevención de la Diabetes Tipo 2

### Prevención Primaria

#### Identificación de Individuos en Riesgo
- **Prediabetes**: Glucosa en ayunas 100-125 mg/dL o HbA1c 5.7-6.4%
- **Factores de riesgo múltiples**: Edad, obesidad, antecedentes familiares
- **Screening**: Cada 3 años en adultos ≥45 años o más frecuente si hay factores de riesgo

#### Intervenciones Efectivas
- **Pérdida de peso**: 5-10% del peso corporal inicial
- **Actividad física**: 150 minutos por semana de ejercicio moderado
- **Modificación dietética**: Reducción de calorías y grasas saturadas
- **Educación estructurada**: Programas de prevención basados en evidencia

### Prevención Secundaria

#### Detección Temprana de Complicaciones
- **Exámenes regulares**: Seguimiento de ojos, riñones, pies y sistema cardiovascular
- **Educación continua**: Sobre síntomas de alerta y autocuidado
- **Vacunación**: Influenza anual, neumococo según indicaciones

## Tecnología en el Manejo de la Diabetes

### Monitoreo Continuo de Glucosa (MCG)
- **Ventajas**: Información en tiempo real sobre tendencias glucémicas
- **Indicaciones**: Pacientes con hipoglucemias frecuentes o asintomáticas
- **Tipos**: Sistemas con alarmas y sin alarmas

### Aplicaciones Móviles y Telemedicina
- **Registro digital**: Aplicaciones para documentar glucosa, alimentos y ejercicio
- **Consultas virtuales**: Seguimiento remoto con el equipo de salud
- **Educación digital**: Recursos educativos interactivos

## Aspectos Psicosociales

### Impacto Emocional
- **Estrés del diagnóstico**: Adaptación a una condición crónica
- **Adherencia al tratamiento**: Factores que influyen en el cumplimiento
- **Calidad de vida**: Impacto en actividades diarias y relaciones sociales

### Apoyo Social y Familiar
- **Educación familiar**: Involucrar a la familia en el manejo de la diabetes
- **Grupos de apoyo**: Beneficios del contacto con otros pacientes
- **Recursos comunitarios**: Programas locales de educación y apoyo

## Futuro del Tratamiento

### Investigación Actual
- **Nuevos medicamentos**: Terapias combinadas y mecanismos de acción novedosos
- **Medicina personalizada**: Tratamiento basado en características genéticas y fenotípicas
- **Inteligencia artificial**: Algoritmos para optimizar el control glucémico

### Perspectivas a Largo Plazo
- **Regeneración de células beta**: Terapias para restaurar la función pancreática
- **Trasplante de células**: Alternativas para casos severos
- **Prevención definitiva**: Intervenciones para prevenir completamente la enfermedad

## Conclusiones

La diabetes tipo 2 es una enfermedad compleja que requiere un manejo integral y personalizado. El éxito del tratamiento depende de la participación activa del paciente, el apoyo del equipo de salud multidisciplinario y la implementación de estrategias basadas en evidencia científica.

La prevención sigue siendo la estrategia más efectiva, especialmente en poblaciones de alto riesgo. Para aquellos que ya tienen la enfermedad, el control glucémico óptimo, junto con el manejo de otros factores de riesgo cardiovascular, puede prevenir o retrasar significativamente las complicaciones.

Es fundamental mantener una perspectiva de tratamiento centrado en el paciente, considerando no solo los aspectos médicos sino también los psicosociales y de calidad de vida. Con los avances continuos en la comprensión de la enfermedad y el desarrollo de nuevas terapias, el futuro para las personas con diabetes tipo 2 es cada vez más prometedor.

La educación continua, tanto para pacientes como para profesionales de la salud, sigue siendo un pilar fundamental en la lucha contra esta epidemia global. Solo a través de esfuerzos coordinados y sostenidos podremos reducir la carga de la diabetes tipo 2 en nuestras comunidades.`
    },
    {
      id: 'breast-cancer-guide',
      title: 'Cáncer de Mama: Detección Temprana y Tratamientos Innovadores',
      category: 'Oncología',
      date: '2024-01-20',
      readTime: 15,
      author: 'Dra. Ana Martínez',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=400&fit=crop',
      tags: ['cáncer de mama', 'oncología', 'detección temprana', 'tratamiento'],
      summary: 'Guía completa sobre el cáncer de mama, incluyendo factores de riesgo, métodos de detección, tratamientos modernos y perspectivas de supervivencia.',
      content: `# Cáncer de Mama: Detección Temprana y Tratamientos Innovadores

El cáncer de mama representa una de las neoplasias más frecuentes en mujeres a nivel mundial, constituyendo la segunda causa de muerte por cáncer en el sexo femenino. Sin embargo, los avances en detección temprana y tratamientos personalizados han mejorado significativamente el pronóstico y la calidad de vida de las pacientes.

## Epidemiología y Factores de Riesgo

### Incidencia Global

El cáncer de mama afecta aproximadamente a 2.3 millones de mujeres anualmente en todo el mundo. La incidencia varía según la región geográfica, siendo más alta en países desarrollados debido a factores demográficos, reproductivos y del estilo de vida.

### Factores de Riesgo No Modificables

#### Edad
- **Riesgo aumentado**: Después de los 50 años
- **Estadística**: 80% de los casos ocurren en mujeres mayores de 50 años
- **Screening**: Mamografías regulares desde los 40-50 años según guidelines

#### Antecedentes Familiares y Genéticos
- **Mutaciones BRCA1 y BRCA2**: Riesgo del 45-65% y 45% respectivamente
- **Síndrome de Li-Fraumeni**: Mutación del gen TP53
- **Historia familiar**: Riesgo duplicado con familiar de primer grado afectado
- **Consejería genética**: Evaluación en casos con historia familiar significativa

#### Factores Hormonales
- **Menarquia temprana**: Antes de los 12 años
- **Menopausia tardía**: Después de los 55 años
- **Nuliparidad**: Ausencia de embarazos
- **Primer embarazo tardío**: Después de los 30 años

### Factores de Riesgo Modificables

#### Estilo de Vida
- **Obesidad**: Especialmente obesidad posmenopáusica
- **Sedentarismo**: Falta de actividad física regular
- **Consumo de alcohol**: Riesgo aumentado con consumo regular
- **Tabaquismo**: Factor de riesgo controversial pero presente

#### Factores Hormonales Externos
- **Terapia hormonal sustitutiva**: Uso prolongado de estrógenos y progestinas
- **Anticonceptivos orales**: Ligero aumento del riesgo durante el uso

## Anatomía y Fisiología de la Mama

### Estructura Mamaria

La mama está compuesta por:
- **Tejido glandular**: 15-20 lóbulos con conductos galactóforos
- **Estroma**: Tejido conectivo y adiposo de soporte
- **Sistema linfático**: Drenaje hacia ganglios axilares, supraclaviculares e infraclaviculares
- **Vascularización**: Arterias mamarias interna y externa

### Cambios Hormonales Cíclicos

Durante el ciclo menstrual, la mama experimenta cambios bajo la influencia de:
- **Estrógenos**: Proliferación ductal
- **Progesterona**: Desarrollo alveolar
- **Prolactina**: Diferenciación secretora

## Tipos de Cáncer de Mama

### Clasificación Histológica

#### Carcinomas Invasivos
- **Carcinoma ductal invasivo (CDI)**: 75-80% de los casos
- **Carcinoma lobular invasivo (CLI)**: 10-15% de los casos
- **Carcinomas especiales**: Mucinoso, tubular, medular, papilar

#### Carcinomas In Situ
- **Carcinoma ductal in situ (CDIS)**: Lesión premaligna
- **Carcinoma lobular in situ (CLIS)**: Marcador de riesgo aumentado

### Clasificación Molecular

#### Subtipos Intrínsecos
- **Luminal A**: RE+, RP+, HER2-, Ki67 bajo (<14%)
- **Luminal B**: RE+, RP+/-, HER2+/-, Ki67 alto (≥14%)
- **HER2 positivo**: RE-, RP-, HER2+
- **Triple negativo**: RE-, RP-, HER2-

## Detección y Diagnóstico

### Métodos de Screening

#### Mamografía
- **Gold standard**: Método principal de screening
- **Sensibilidad**: 85-90% en mujeres postmenopáusicas
- **Frecuencia**: Anual o bienal según guidelines
- **Limitaciones**: Densidad mamaria puede reducir sensibilidad

#### Ultrasonido Mamario
- **Indicaciones**: Complemento a mamografía, especialmente en mamas densas
- **Ventajas**: No radiación ionizante, evaluación de lesiones quísticas
- **Limitaciones**: Dependiente del operador, no detecta microcalcificaciones

#### Resonancia Magnética
- **Indicaciones específicas**: Alto riesgo genético, evaluación de extensión de enfermedad
- **Sensibilidad**: 90-100% para cáncer invasivo
- **Limitaciones**: Alto costo, falsos positivos frecuentes

### Síntomas y Signos Clínicos

#### Síntomas Tempranos
- **Nódulo palpable**: Masa firme, irregular, indolora
- **Cambios en la piel**: Retracción, piel de naranja
- **Alteraciones del pezón**: Retracción, secreción sanguinolenta
- **Asimetría mamaria**: Cambios en forma o tamaño

#### Síntomas Avanzados
- **Dolor óseo**: Metástasis óseas
- **Disnea**: Derrame pleural, metástasis pulmonares
- **Síntomas neurológicos**: Metástasis cerebrales
- **Hepatomegalia**: Metástasis hepáticas

### Procedimientos Diagnósticos

#### Biopsia por Punción
- **Técnica**: Biopsia por aspiración con aguja fina (BAAF)
- **Indicaciones**: Lesiones quísticas, ganglios linfáticos
- **Limitaciones**: No diferencia invasivo de in situ

#### Biopsia con Aguja Gruesa (Core Biopsy)
- **Técnica estándar**: 14-gauge bajo guía imagenológica
- **Ventajas**: Diagnóstico histológico completo, receptores hormonales
- **Concordancia**: >95% con cirugía

#### Biopsia por Vacuo
- **Técnicas**: Mammotome, ABBI
- **Indicaciones**: Microcalcificaciones, lesiones pequeñas
- **Ventajas**: Mayor volumen de tejido, menor tasa de subestimación

## Estadificación TNM

### Sistema TNM 8ª Edición

#### Tumor Primario (T)
- **T0**: No evidencia de tumor primario
- **Tis**: Carcinoma in situ
- **T1**: Tumor ≤2 cm (T1a: >0.1-0.5 cm, T1b: >0.5-1 cm, T1c: >1-2 cm)
- **T2**: Tumor >2-5 cm
- **T3**: Tumor >5 cm
- **T4**: Extensión a pared torácica o piel

#### Ganglios Linfáticos (N)
- **N0**: Sin metástasis ganglionares
- **N1**: 1-3 ganglios axilares ipsilaterales
- **N2**: 4-9 ganglios axilares o ganglios mamarios internos sin ganglios axilares
- **N3**: ≥10 ganglios axilares o ganglios infra/supraclaviculares

#### Metástasis a Distancia (M)
- **M0**: Sin metástasis a distancia
- **M1**: Metástasis a distancia

### Estadios Pronósticos

La estadificación actual incorpora además del TNM:
- **Grado histológico**: Diferenciación celular
- **Receptores hormonales**: Estrógeno (RE) y progesterona (RP)
- **HER2**: Sobreexpresión o amplificación
- **Ki67**: Índice de proliferación celular

## Tratamiento Multidisciplinario

### Cirugía

#### Cirugía Conservadora
- **Lumpectomía**: Resección del tumor con márgenes libres
- **Indicaciones**: Tumores pequeños, relación tumor-mama favorable
- **Requisitos**: Radioterapia posterior obligatoria
- **Contraindicaciones**: Multicentralidad, contraindicación para radioterapia

#### Mastectomía
- **Mastectomía simple**: Remoción de toda la glándula mamaria
- **Mastectomía radical modificada**: Incluye vaciamiento axilar
- **Mastectomía profiláctica**: En pacientes de muy alto riesgo

#### Cirugía del Ganglio Centinela
- **Técnica**: Identificación con colorante y/o radiofármaco
- **Ventajas**: Menor morbilidad que vaciamiento axilar completo
- **Indicaciones**: Axilas clínicamente negativas
- **Tasa de falsos negativos**: <5% en manos expertas

### Radioterapia

#### Radioterapia Adyuvante
- **Indicaciones**: Post-cirugía conservadora, post-mastectomía según factores de riesgo
- **Esquemas**: Fraccionamiento convencional vs. hipofraccionado
- **Técnicas**: IMRT, VMAT para mejor conformación de dosis

#### Radioterapia en Situaciones Especiales
- **Irradiación parcial**: APBI en casos seleccionados
- **Boost**: Dosis adicional al lecho tumoral
- **Irradiación ganglionar**: Axilar, supraclavicular, mamaria interna según indicaciones

### Tratamiento Sistémico

#### Quimioterapia

**Quimioterapia Adyuvante**
- **Indicaciones**: Según riesgo de recurrencia y beneficio esperado
- **Esquemas comunes**: AC-T, TAC, TC, FEC
- **Duración**: Típicamente 12-24 semanas

**Quimioterapia Neoadyuvante**
- **Objetivos**: Reducción tumoral, evaluación de respuesta in vivo
- **Candidatas**: Tumores grandes, enfermedad localmente avanzada
- **Respuesta patológica completa**: Factor pronóstico favorable

#### Terapia Hormonal

**Inhibidores de Aromatasa**
- **Medicamentos**: Anastrozol, letrozol, exemestano
- **Indicaciones**: Mujeres postmenopáusicas con tumores RE+
- **Duración**: 5 años, extensión a 10 años en casos seleccionados

**Moduladores Selectivos del Receptor de Estrógeno (SERM)**
- **Tamoxifeno**: Estándar en mujeres premenopáusicas
- **Duración**: 5-10 años según factores de riesgo
- **Efectos secundarios**: Sofocos, riesgo tromboembólico

**Inhibidores de CDK4/6**
- **Medicamentos**: Palbociclib, ribociclib, abemaciclib
- **Indicaciones**: Cáncer de mama avanzado RE+/HER2-
- **Combinación**: Con inhibidores de aromatasa o fulvestrant

#### Terapia Anti-HER2

**Trastuzumab**
- **Mecanismo**: Anticuerpo monoclonal anti-HER2
- **Indicaciones**: Tumores HER2+ estadios I-IV
- **Duración**: 12 meses en adyuvancia
- **Monitoreo**: Función cardíaca por cardiotoxicidad

**Pertuzumab**
- **Combinación**: Con trastuzumab y quimioterapia
- **Indicaciones**: Enfermedad neoadyuvante y metastásica
- **Beneficio**: Mayor respuesta patológica completa

**T-DM1 (Trastuzumab-emtansina)**
- **Mecanismo**: Conjugado anticuerpo-droga
- **Indicaciones**: Enfermedad HER2+ metastásica refractaria
- **Ventajas**: Menor toxicidad que quimioterapia convencional

### Tratamientos Innovadores

#### Inmunoterapia
- **Pembrolizumab**: En cáncer de mama triple negativo con alta expresión de PD-L1
- **Combinaciones**: Con quimioterapia en neoadyuvancia y primera línea metastásica

#### Terapias Dirigidas
- **Inhibidores de mTOR**: Everolimus en combinación con exemestano
- **Inhibidores de PI3K**: Alpelisib para tumores con mutación PIK3CA
- **Inhibidores de PARP**: Olaparib y talazoparib para tumores con mutación BRCA

## Manejo de Efectos Secundarios

### Efectos de la Quimioterapia

#### Toxicidad Hematológica
- **Neutropenia**: Monitoreo con hemograma, uso de G-CSF si indicado
- **Anemia**: Evaluación y manejo según severidad
- **Trombocitopenia**: Precauciones hemorrágicas

#### Toxicidad No Hematológica
- **Náuseas y vómitos**: Antieméticos profilácticos según esquema
- **Alopecia**: Asesoramiento y alternativas cosméticas
- **Neuropatía**: Evaluación neurológica, ajuste de dosis si severa
- **Cardiotoxicidad**: Monitoreo de fracción de eyección

### Efectos de la Terapia Hormonal

#### Síntomas Menopáusicos
- **Sofocos**: Manejo no hormonal, antidepresivos
- **Sequedad vaginal**: Lubricantes, hidratantes vaginales
- **Alteraciones del sueño**: Higiene del sueño, melatonina

#### Efectos Metabólicos
- **Osteoporosis**: Densitometría ósea, suplementación de calcio y vitamina D
- **Dislipidemia**: Monitoreo y manejo según guidelines cardiovasculares
- **Aumento de peso**: Asesoramiento nutricional, ejercicio

## Seguimiento y Supervivencia

### Protocolo de Seguimiento

#### Primer Año
- **Consultas**: Cada 3-4 meses
- **Exámenes**: Historia clínica, examen físico
- **Estudios**: Mamografía anual, otros según sintomatología

#### Años 2-5
- **Consultas**: Cada 4-6 meses
- **Vigilancia**: Síntomas de recurrencia, efectos tardíos del tratamiento
- **Calidad de vida**: Evaluación psicosocial, rehabilitación

#### Después de 5 Años
- **Consultas**: Anuales o según riesgo
- **Screening**: Mamografía anual, otros cánceres según edad
- **Cuidados preventivos**: Salud cardiovascular, ósea

### Detección de Recurrencia

#### Recurrencia Local
- **Síntomas**: Nódulo en mama tratada o cicatriz
- **Diagnóstico**: Biopsia confirmativa
- **Tratamiento**: Cirugía, radioterapia si no recibida previamente

#### Recurrencia Regional
- **Sitios**: Ganglios linfáticos regionales
- **Evaluación**: Estudios de extensión
- **Manejo**: Tratamiento multimodal

#### Metástasis a Distancia
- **Sitios frecuentes**: Huesos, hígado, pulmones, cerebro
- **Diagnóstico**: TC, RM, PET según sintomatología
- **Tratamiento**: Paliativo, control de síntomas

## Aspectos Psicosociales

### Impacto Emocional del Diagnóstico

#### Reacciones Comunes
- **Shock inicial**: Desorganización, negación
- **Ansiedad**: Miedo a la muerte, incertidumbre sobre el futuro
- **Depresión**: Tristeza, pérdida de interés en actividades
- **Ira**: Sentimientos de injusticia, frustración

#### Factores de Riesgo Psicológico
- **Edad joven**: Mayor impacto en planes de vida
- **Ausencia de apoyo social**: Aislamiento, soledad
- **Historia psiquiátrica previa**: Mayor vulnerabilidad
- **Tratamientos agresivos**: Mayor carga psicológica

### Apoyo Psicológico

#### Intervenciones Profesionales
- **Psicoterapia individual**: Terapia cognitivo-conductual, terapia de apoyo
- **Terapia grupal**: Grupos de pacientes con cáncer de mama
- **Evaluación psiquiátrica**: Medicación si depresión mayor o ansiedad severa

#### Apoyo Social
- **Familia y amigos**: Red de apoyo emocional y práctico
- **Grupos de supervivientes**: Intercambio de experiencias
- **Organizaciones de pacientes**: Recursos educativos y de apoyo

### Imagen Corporal y Sexualidad

#### Cambios en la Imagen Corporal
- **Mastectomía**: Pérdida de la mama, alteración de la feminidad
- **Reconstrucción mamaria**: Opciones inmediatas y diferidas
- **Alopecia**: Impacto temporal pero significativo
- **Cambios de peso**: Efectos del tratamiento

#### Función Sexual
- **Menopausia inducida**: Sequedad vaginal, disminución de la libido
- **Fatiga**: Reducción del interés sexual
- **Imagen corporal**: Autoestima y atractivo sexual
- **Comunicación de pareja**: Importancia del diálogo abierto

## Reconstrucción Mamaria

### Tipos de Reconstrucción

#### Reconstrucción con Implantes
- **Expansores tisulares**: Proceso en dos etapas
- **Implantes definitivos**: Salinos o de silicona
- **Ventajas**: Cirugía menos compleja, recuperación más rápida
- **Desventajas**: Posibles complicaciones protésicas a largo plazo

#### Reconstrucción Autóloga
- **Colgajo DIEP**: Grasa y piel abdominal sin músculo
- **Colgajo TRAM**: Tejido abdominal con músculo
- **Colgajo dorsal ancho**: Músculo y piel de la espalda
- **Ventajas**: Resultado más natural, duradero
- **Desventajas**: Cirugía más compleja, sitio donante

### Timing de la Reconstrucción

#### Reconstrucción Inmediata
- **Ventajas**: Una sola cirugía, mejor resultado cosmético
- **Consideraciones**: No debe retrasar tratamientos adyuvantes
- **Contraindicaciones**: Necesidad de radioterapia post-mastectomía

#### Reconstrucción Diferida
- **Indicaciones**: Radioterapia post-mastectomía planificada
- **Ventajas**: Permite completar todos los tratamientos primero
- **Timing**: Típicamente 6-12 meses después de completar tratamientos

## Prevención y Reducción de Riesgo

### Prevención Primaria

#### Modificaciones del Estilo de Vida
- **Actividad física regular**: Mínimo 150 minutos por semana
- **Mantenimiento de peso saludable**: IMC 18.5-24.9 kg/m²
- **Limitación del alcohol**: No más de una bebida por día
- **Lactancia materna**: Efecto protector acumulativo

#### Quimioprevención
- **Tamoxifeno**: Reducción del 38% en mujeres de alto riesgo
- **Raloxifeno**: Alternativa en mujeres postmenopáusicas
- **Inhibidores de aromatasa**: En investigación para prevención

### Prevención Secundaria en Alto Riesgo

#### Cirugía Profiláctica
- **Mastectomía profiláctica bilateral**: Reducción del riesgo >90%
- **Ooforectomía profiláctica**: En portadoras de mutaciones BRCA
- **Consideraciones**: Impacto psicológico y funcional significativo

#### Screening Intensificado
- **RM mamaria anual**: En mujeres con riesgo >20%
- **Inicio temprano**: Screening desde los 25-30 años en alto riesgo
- **Frecuencia aumentada**: Cada 6 meses en algunos casos

## Investigación y Futuro

### Medicina de Precisión

#### Caracterización Molecular Avanzada
- **Secuenciación de nueva generación**: Identificación de mutaciones específicas
- **Análisis de expresión génica**: Firmas moleculares pronósticas
- **Heterogeneidad tumoral**: Comprensión de la evolución clonal

#### Terapias Personalizadas
- **Medicina basada en biomarcadores**: Selección de tratamiento según perfil molecular
- **Terapias dirigidas**: Desarrollo de nuevos blancos terapéuticos
- **Combinaciones racionales**: Estrategias para superar resistencia

### Tecnologías Emergentes

#### Inteligencia Artificial
- **Interpretación radiológica**: Algoritmos de deep learning para mamografía
- **Patología digital**: Análisis automatizado de biopsias
- **Predicción de respuesta**: Modelos para optimizar tratamientos

#### Biopsia Líquida
- **DNA tumoral circulante**: Monitoreo no invasivo de respuesta
- **Células tumorales circulantes**: Caracterización de metástasis
- **Aplicaciones clínicas**: Detección temprana de recurrencia

### Enfoques Innovadores

#### Inmunoterapia Avanzada
- **Vacunas tumorales**: Estimulación específica del sistema inmune
- **Terapia celular adoptiva**: CAR-T cells para tumores sólidos
- **Modulación del microambiente**: Estrategias para sensibilizar tumores "fríos"

#### Nanotecnología
- **Sistemas de liberación dirigida**: Nanopartículas con targeting específico
- **Teranóstica**: Combinación de diagnóstico y terapia
- **Superación de barreras**: Penetración en tejidos y células

## Conclusiones

El cáncer de mama representa uno de los mayores desafíos oncológicos de nuestro tiempo, pero también una historia de éxito en la medicina moderna. Los avances en comprensión molecular, técnicas quirúrgicas, tratamientos sistémicos y cuidados de soporte han transformado el pronóstico de esta enfermedad.

La detección temprana sigue siendo fundamental para mejorar los resultados. Los programas de screening organizados y la concienciación pública sobre los síntomas de alerta son elementos clave en la reducción de la mortalidad.

El tratamiento actual del cáncer de mama se basa en un enfoque multidisciplinario y personalizado, considerando no solo las características del tumor sino también las preferencias y circunstancias individuales de cada paciente. La integración de nuevas tecnologías y biomarcadores promete una medicina aún más precisa en el futuro.

Los aspectos psicosociales y de calidad de vida han ganado reconocimiento como componentes esenciales del cuidado integral. El apoyo emocional, la rehabilitación y la reintegración social son tan importantes como el tratamiento médico.

Mirando hacia el futuro, la investigación continúa avanzando en múltiples frentes: desde la prevención y detección temprana hasta terapias más efectivas y menos tóxicas. La medicina de precisión, la inmunoterapia y las tecnologías emergentes prometen mejores resultados con menor impacto en la calidad de vida.

El cáncer de mama ya no es necesariamente una sentencia de muerte. Con detección temprana y tratamiento apropiado, la mayoría de las mujeres pueden esperar vivir vidas plenas y productivas. La clave está en mantener la vigilancia, buscar atención médica oportuna y aprovechar todos los recursos disponibles para el cuidado integral.`
    },
    {
      id: 'cardiovascular-disease',
      title: 'Enfermedad Cardiovascular: Prevención y Manejo Integral',
      category: 'Cardiología',
      date: '2024-01-25',
      readTime: 14,
      author: 'Dr. Carlos Rodríguez',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop',
      tags: ['enfermedad cardiovascular', 'cardiología', 'prevención', 'tratamiento'],
      summary: 'Guía integral sobre enfermedades cardiovasculares, factores de riesgo, prevención primaria y secundaria, y los últimos avances en tratamiento.',
      content: `# Enfermedad Cardiovascular: Prevención y Manejo Integral

Las enfermedades cardiovasculares representan la principal causa de mortalidad a nivel mundial, siendo responsables de aproximadamente 17.9 millones de muertes anuales según la Organización Mundial de la Salud. Esta cifra alarmante subraya la importancia crítica de comprender, prevenir y tratar eficazmente estas condiciones que afectan el corazón y los vasos sanguíneos.

## Definición y Clasificación

### ¿Qué son las Enfermedades Cardiovasculares?

Las enfermedades cardiovasculares constituyen un grupo de trastornos que afectan el corazón y los vasos sanguíneos, incluyendo arterias, venas y capilares. Estas condiciones pueden ser congénitas o adquiridas, y su severidad varía desde asintomáticas hasta potencialmente mortales.

### Principales Tipos de Enfermedades Cardiovasculares

#### Enfermedad Coronaria
- **Definición**: Estrechamiento o bloqueo de las arterias coronarias
- **Prevalencia**: Afecta aproximadamente al 6.2% de adultos en Estados Unidos
- **Manifestaciones**: Angina de pecho, infarto agudo de miocardio
- **Fisiopatología**: Aterosclerosis coronaria con formación de placas

#### Enfermedad Cerebrovascular
- **Accidente cerebrovascular (ACV)**: Interrupción del flujo sanguíneo cerebral
- **Tipos**: Isquémico (87%) y hemorrágico (13%)
- **Incidencia**: 795,000 casos anuales en Estados Unidos
- **Secuelas**: Discapacidad neurológica, deterioro cognitivo

#### Enfermedad Arterial Periférica
- **Localización**: Arterias de extremidades, especialmente inferiores
- **Síntoma principal**: Claudicación intermitente
- **Complicaciones**: Isquemia crítica, amputación
- **Asociación**: Frecuentemente coexiste con enfermedad coronaria

#### Insuficiencia Cardíaca
- **Definición**: Incapacidad del corazón para bombear sangre eficientemente
- **Prevalencia**: Afecta a más de 6 millones de adultos en Estados Unidos
- **Clasificación**: Con fracción de eyección reducida (HFrEF) o preservada (HFpEF)
- **Mortalidad**: Tasa de supervivencia a 5 años del 50%

#### Arritmias Cardíacas
- **Fibrilación auricular**: Arritmia más común, afecta al 2-3% de la población
- **Taquicardia ventricular**: Potencialmente mortal
- **Bradiarritmias**: Pueden requerir marcapasos
- **Síncope**: Manifestación común de arritmias

#### Enfermedades Valvulares
- **Estenosis aórtica**: Más común en ancianos
- **Insuficiencia mitral**: Puede ser funcional o orgánica
- **Prevalencia**: Aumenta con la edad, especialmente después de los 65 años
- **Tratamiento**: Desde seguimiento hasta reemplazo valvular

## Factores de Riesgo Cardiovascular

### Factores de Riesgo No Modificables

#### Edad
- **Hombres**: Riesgo aumentado después de los 45 años
- **Mujeres**: Riesgo aumentado después de los 55 años o post-menopausia
- **Mecanismo**: Envejecimiento vascular, rigidez arterial aumentada
- **Estadística**: El riesgo se duplica cada década después de los 55 años

#### Sexo
- **Hombres**: Mayor riesgo de enfermedad coronaria temprana
- **Mujeres**: Protección pre-menopáusica por estrógenos
- **Post-menopausia**: Equiparación del riesgo entre sexos
- **Diferencias**: Presentación clínica puede variar entre sexos

#### Antecedentes Familiares
- **Definición**: Familiar de primer grado con evento cardiovascular prematuro
- **Criterios**: Hombres <55 años, mujeres <65 años
- **Riesgo**: Aumenta 40-60% el riesgo de enfermedad coronaria
- **Factores genéticos**: Múltiples variantes genéticas involucradas

### Factores de Riesgo Modificables

#### Hipertensión Arterial
- **Definición**: Presión arterial sistólica ≥130 mmHg o diastólica ≥80 mmHg
- **Prevalencia**: Afecta al 45% de adultos en Estados Unidos
- **Riesgo**: Cada 20 mmHg de aumento sistólico duplica el riesgo cardiovascular
- **Tratamiento**: Cambios de estilo de vida y medicamentos antihipertensivos

#### Dislipidemia
- **Colesterol LDL elevado**: >100 mg/dL (2.6 mmol/L)
- **Colesterol HDL bajo**: <40 mg/dL hombres, <50 mg/dL mujeres
- **Triglicéridos elevados**: >150 mg/dL (1.7 mmol/L)
- **Tratamiento**: Estatinas como primera línea, terapia combinada si necesario

#### Diabetes Mellitus
- **Tipo 2**: Riesgo cardiovascular 2-4 veces mayor
- **Hemoglobina A1c**: Objetivo <7% para la mayoría de pacientes
- **Complicaciones microvasculares**: Retinopatía, nefropatía, neuropatía
- **Manejo integral**: Control glucémico, presión arterial y lípidos

#### Tabaquismo
- **Riesgo**: Aumenta 2-3 veces el riesgo de enfermedad coronaria
- **Mecanismo**: Disfunción endotelial, inflamación, trombosis
- **Cesación**: Beneficio inmediato, riesgo se equipara en 1-2 años
- **Exposición pasiva**: También aumenta el riesgo cardiovascular

#### Obesidad
- **Definición**: IMC ≥30 kg/m²
- **Obesidad abdominal**: Circunferencia cintura >102 cm hombres, >88 cm mujeres
- **Mecanismo**: Inflamación crónica, resistencia insulínica
- **Comorbilidades**: Hipertensión, diabetes, dislipidemia

#### Sedentarismo
- **Recomendación**: Mínimo 150 minutos de actividad moderada por semana
- **Beneficio**: Reducción del 30-35% en mortalidad cardiovascular
- **Mecanismo**: Mejora función endotelial, reduce inflamación
- **Tipos**: Aeróbico, resistencia, flexibilidad

### Factores de Riesgo Psicosociales

#### Estrés Crónico
- **Mecanismo**: Activación del eje hipotálamo-hipófisis-adrenal
- **Efectos**: Hipertensión, inflamación, comportamientos no saludables
- **Manejo**: Técnicas de relajación, mindfulness, apoyo psicológico

#### Depresión
- **Prevalencia**: 15-20% en pacientes con enfermedad coronaria
- **Riesgo**: Aumenta 50% el riesgo de eventos cardiovasculares
- **Tratamiento**: Antidepresivos seguros, psicoterapia

#### Aislamiento Social
- **Impacto**: Comparable a factores de riesgo tradicionales
- **Mecanismo**: Estrés crónico, comportamientos no saludables
- **Intervención**: Programas de apoyo social, actividades grupales

## Fisiopatología de la Aterosclerosis

### Desarrollo de la Placa Aterosclerótica

#### Iniciación
- **Disfunción endotelial**: Primera etapa del proceso aterosclerótico
- **Factores desencadenantes**: Hipertensión, dislipidemia, tabaquismo, diabetes
- **Cambios moleculares**: Reducción de óxido nítrico, aumento de moléculas de adhesión
- **Permeabilidad aumentada**: Permite entrada de lipoproteínas a la pared arterial

#### Progresión
- **Migración celular**: Monocitos se transforman en macrófagos
- **Células espumosas**: Macrófagos cargados de lípidos
- **Proliferación**: Células musculares lisas migran y proliferan
- **Matriz extracelular**: Depósito de colágeno y proteoglicanos

#### Complicación
- **Ruptura de placa**: Exposición del núcleo lipídico altamente trombogénico
- **Trombosis**: Formación de coágulo puede ocluir completamente la arteria
- **Erosión de placa**: Mecanismo alternativo de trombosis
- **Embolia**: Fragmentos pueden viajar a arterias distales

### Inflamación en la Aterosclerosis

#### Biomarcadores Inflamatorios
- **Proteína C reactiva (PCR)**: Predictor independiente de riesgo cardiovascular
- **Interleucina-6**: Mediador inflamatorio clave
- **Factor de necrosis tumoral-α**: Promueve inflamación vascular
- **Valores objetivo**: PCR <2 mg/L para bajo riesgo

#### Papel de la Inflamación
- **Iniciación**: Respuesta inflamatoria a la lesión endotelial
- **Progresión**: Perpetúa el proceso aterosclerótico
- **Complicación**: Desestabiliza las placas ateroscleróticas
- **Tratamiento**: Estatinas tienen efecto antiinflamatorio

## Prevención Primaria

### Evaluación del Riesgo Cardiovascular

#### Calculadoras de Riesgo
- **Pooled Cohort Equations**: Utilizada en guías americanas
- **SCORE**: Sistema europeo de evaluación de riesgo
- **Framingham Risk Score**: Herramienta clásica
- **QRISK**: Incorpora factores adicionales como enfermedad renal

#### Categorización del Riesgo
- **Bajo riesgo**: <5% a 10 años
- **Riesgo intermedio**: 5-20% a 10 años
- **Alto riesgo**: >20% a 10 años
- **Muy alto riesgo**: Enfermedad cardiovascular establecida

### Intervenciones en el Estilo de Vida

#### Alimentación Saludable

**Dieta Mediterránea**
- **Componentes**: Aceite de oliva, frutos secos, pescado, frutas, verduras
- **Evidencia**: Reducción del 30% en eventos cardiovasculares mayores
- **Estudio PREDIMED**: Demostró beneficios en prevención primaria
- **Implementación**: Sustitución gradual de alimentos procesados

**Restricción de Sodio**
- **Recomendación**: <2.3 gramos por día (<1.5 g ideal)
- **Beneficio**: Reducción de 2-8 mmHg en presión arterial sistólica
- **Fuentes**: 70% proviene de alimentos procesados
- **Estrategias**: Lectura de etiquetas, cocinar en casa

**Limitación de Grasas Saturadas**
- **Objetivo**: <7% de calorías totales
- **Sustitución**: Grasas insaturadas por saturadas
- **Evidencia**: Reducción del colesterol LDL y riesgo cardiovascular
- **Fuentes principales**: Carnes rojas, productos lácteos enteros

#### Actividad Física Regular

**Recomendaciones**
- **Aeróbico**: 150 minutos moderado o 75 minutos vigoroso por semana
- **Resistencia**: 2 días por semana, grupos musculares principales
- **Flexibilidad**: Ejercicios de estiramiento 2-3 días por semana
- **Progresión**: Aumento gradual en intensidad y duración

**Beneficios Cardiovasculares**
- **Presión arterial**: Reducción de 4-9 mmHg sistólica
- **Colesterol**: Aumento de HDL, reducción de triglicéridos
- **Peso corporal**: Mantenimiento de peso saludable
- **Función endotelial**: Mejora de la vasodilatación

**Tipos de Ejercicio**
- **Caminar**: Actividad más accesible y sostenible
- **Natación**: Ejercicio de bajo impacto, ideal para artropatías
- **Ciclismo**: Alternativa para personas con limitaciones de peso
- **Ejercicio en intervalos**: Mayor beneficio cardiovascular en menor tiempo

#### Cesación del Tabaquismo

**Estrategias de Cesación**
- **Terapia de reemplazo de nicotina**: Parches, goma, pastillas
- **Medicamentos**: Bupropión, varenicline
- **Terapia comportamental**: Consejería individual y grupal
- **Combinación**: Farmacoterapia más terapia comportamental

**Beneficios de la Cesación**
- **Inmediato**: Reducción de monóxido de carbono y nicotina
- **24 horas**: Disminución del riesgo de infarto
- **1 año**: Riesgo cardiovascular reducido a la mitad
- **5 años**: Riesgo de ACV igual a no fumadores

#### Manejo del Estrés

**Técnicas de Reducción**
- **Meditación**: Mindfulness, meditación trascendental
- **Yoga**: Combina ejercicio físico con relajación
- **Ejercicios de respiración**: Técnicas de respiración profunda
- **Biofeedback**: Entrenamiento para control de respuestas corporales

**Apoyo Social**
- **Redes de apoyo**: Familia, amigos, grupos de apoyo
- **Actividades sociales**: Participación en comunidad
- **Mascotas**: Compañía animal puede reducir estrés
- **Voluntariado**: Actividades altruistas mejoran bienestar

### Tratamiento Farmacológico Preventivo

#### Estatinas en Prevención Primaria

**Indicaciones**
- **Colesterol LDL ≥190 mg/dL**: Indicación absoluta
- **Diabetes 40-75 años**: Recomendación clase I
- **Riesgo estimado ≥7.5%**: Considerar tratamiento
- **Factores potenciadores**: Antecedentes familiares, PCR elevada

**Tipos de Estatinas**
- **Alta intensidad**: Atorvastatina 40-80 mg, rosuvastatina 20-40 mg
- **Moderada intensidad**: Atorvastatina 10-20 mg, simvastatina 20-40 mg
- **Baja intensidad**: Simvastatina 10 mg, pravastatina 10-20 mg

**Monitoreo**
- **Función hepática**: ALT/AST antes de iniciar y si síntomas
- **Creatinquinasa**: Si síntomas musculares
- **Perfil lipídico**: 4-12 semanas después de iniciar

#### Aspirina en Prevención Primaria

**Recomendaciones Actuales**
- **Edad 40-59 años**: Considerar si riesgo cardiovascular ≥10% y bajo riesgo hemorrágico
- **Edad ≥70 años**: No se recomienda rutinariamente
- **Dosis**: 81 mg diarios
- **Evaluación**: Balance beneficio/riesgo individualizado

**Contraindicaciones**
- **Sangrado gastrointestinal activo**: Contraindicación absoluta
- **Alergia a aspirina**: Reacción alérgica conocida
- **Trastornos hemorrágicos**: Hemofilia, púrpura trombocitopénica
- **Uso de anticoagulantes**: Incrementa riesgo hemorrágico

## Prevención Secundaria

### Manejo Post-Infarto Agudo de Miocardio

#### Fase Aguda
- **Reperfusión**: Angioplastia primaria o trombolisis
- **Antiagregación dual**: Aspirina + P2Y12 inhibidor
- **Anticoagulación**: Heparina no fraccionada o enoxaparina
- **Beta-bloqueadores**: Inicio temprano si estable hemodinámicamente

#### Tratamiento Crónico
- **Estatinas de alta intensidad**: Atorvastatina 80 mg o rosuvastatina 40 mg
- **IECA o ARA-II**: Especialmente si disfunción ventricular izquierda
- **Beta-bloqueadores**: Mantenimiento a largo plazo
- **Antiagregación**: Aspirina indefinidamente, P2Y12 inhibidor 12 meses

### Rehabilitación Cardíaca

#### Componentes del Programa
- **Ejercicio supervisado**: Programa estructurado de 12 semanas
- **Educación**: Modificación de factores de riesgo
- **Apoyo psicológico**: Manejo de ansiedad y depresión
- **Seguimiento**: Monitoreo de adherencia a medicamentos

#### Beneficios Demostrados
- **Mortalidad**: Reducción del 13% en mortalidad total
- **Hospitalización**: Reducción del 18% en hospitalizaciones cardíacas
- **Calidad de vida**: Mejora significativa en cuestionarios validados
- **Costo-efectividad**: Programa costo-efectivo a largo plazo

### Manejo de Comorbilidades

#### Diabetes en Paciente Cardiovascular
- **Objetivos glucémicos**: HbA1c <7% (individualizar según paciente)
- **Medicamentos**: Preferir fármacos con beneficio cardiovascular
- **SGLT-2 inhibidores**: Empagliflozina, canagliflozina
- **Agonistas GLP-1**: Liraglutida, semaglutida

#### Hipertensión Post-Evento
- **Objetivo**: <130/80 mmHg en la mayoría de pacientes
- **Medicamentos**: IECA/ARA-II como primera línea
- **Combinaciones**: Agregar diuréticos o calcio-antagonistas
- **Monitoreo**: Presión arterial domiciliaria

## Diagnóstico y Evaluación

### Síntomas de Enfermedad Cardiovascular

#### Dolor Torácico
- **Angina típica**: Dolor opresivo, precipitado por esfuerzo, aliviado con reposo
- **Angina atípica**: Características atípicas pero sugestiva
- **Dolor no anginoso**: Características no sugestivas de isquemia
- **Evaluación**: Historia clínica detallada, examen físico

#### Disnea de Esfuerzo
- **Clasificación funcional**: NYHA I-IV
- **Causas**: Insuficiencia cardíaca, enfermedad valvular, arritmias
- **Evaluación**: Ecocardiograma, BNP o NT-proBNP
- **Diagnóstico diferencial**: Causas pulmonares, anemia

#### Síncope
- **Causas cardíacas**: Arritmias, obstrucción al flujo ventricular
- **Síncope vasovagal**: Causa más común en jóvenes
- **Evaluación**: ECG, ecocardiograma, Holter
- **Síncope inexplicado**: Puede requerir estudio electrofisiológico

### Pruebas Diagnósticas No Invasivas

#### Electrocardiograma
- **ECG en reposo**: Evaluación inicial obligatoria
- **Cambios isquémicos**: Depresión ST, inversión de onda T
- **Infarto previo**: Ondas Q patológicas
- **Arritmias**: Fibrilación auricular, bloqueos

#### Pruebas de Esfuerzo
- **Indicaciones**: Evaluación de isquemia, capacidad funcional
- **Contraindicaciones**: Infarto reciente, angina inestable
- **Interpretación**: Depresión ST ≥1 mm, síntomas anginosos
- **Capacidad funcional**: METs alcanzados

#### Ecocardiografía
- **Función ventricular**: Fracción de eyección, motilidad parietal
- **Enfermedad valvular**: Estenosis, insuficiencia
- **Ecocardiograma de estrés**: Con dobutamina o ejercicio
- **Técnicas avanzadas**: Strain, 3D

#### Estudios de Imagen Avanzada

**Tomografía Computada Cardíaca**
- **Score de calcio**: Cuantificación de calcio coronario
- **Angiografía coronaria por TC**: Evaluación no invasiva de arterias coronarias
- **Indicaciones**: Riesgo intermedio, síntomas atípicos
- **Limitaciones**: Radiación, contraste yodado

**Resonancia Magnética Cardíaca**
- **Función ventricular**: Gold standard para volúmenes y función
- **Caracterización tisular**: Fibrosis, edema, perfusión
- **Indicaciones**: Miocardiopatías, masas cardíacas
- **Ventajas**: Sin radiación, excelente resolución

**Medicina Nuclear**
- **SPECT**: Perfusión miocárdica con talio o tecnecio
- **PET**: Perfusión y viabilidad miocárdica
- **Indicaciones**: Evaluación de isquemia y viabilidad
- **Limitaciones**: Radiación, disponibilidad limitada

### Pruebas Diagnósticas Invasivas

#### Cateterismo Cardíaco
- **Indicaciones**: Angina inestable, SCASEST de alto riesgo
- **Anatomía coronaria**: Evaluación directa de estenosis
- **Hemodinamia**: Presiones intracardíacas, gasto cardíaco
- **Intervención**: Angioplastia con stent si indicado

#### Estudios Electrofisiológicos
- **Indicaciones**: Síncope inexplicado, taquicardia ventricular
- **Técnica**: Catéteres intracardíacos para mapeo eléctrico
- **Ablación**: Tratamiento de arritmias por radiofrecuencia
- **Dispositivos**: Implante de marcapasos o desfibrilador

## Tratamiento de la Enfermedad Coronaria

### Síndrome Coronario Agudo

#### Infarto con Elevación del ST (STEMI)
- **Reperfusión primaria**: Angioplastia <90 minutos desde contacto médico
- **Trombolisis**: Si angioplastia no disponible <120 minutos
- **Antiagregación**: Aspirina + prasugrel/ticagrelor
- **Anticoagulación**: Heparina no fraccionada o bivalirudina

#### Síndrome Coronario Agudo sin Elevación del ST
- **Estratificación de riesgo**: Score TIMI, GRACE
- **Estrategia invasiva**: Cateterismo <24 horas si alto riesgo
- **Estrategia conservadora**: Cateterismo solo si isquemia recurrente
- **Medicamentos**: Aspirina, P2Y12 inhibidor, estatina

### Enfermedad Coronaria Crónica

#### Tratamiento Médico
- **Antiagregación**: Aspirina 81 mg diarios
- **Control lipídico**: Estatina de alta intensidad
- **Control de presión arterial**: Objetivo <130/80 mmHg
- **Control glucémico**: Si diabetes, objetivo individualizado

#### Revascularización
- **Angioplastia coronaria**: Estenosis significativas, síntomas refractarios
- **Cirugía de bypass**: Enfermedad de múltiples vasos, lesión de tronco
- **Indicaciones**: Síntomas limitantes, isquemia extensa
- **Decisión**: Equipo multidisciplinario (Heart Team)

### Medicamentos Cardiovasculares

#### Antiagregantes Plaquetarios
- **Aspirina**: Inhibidor irreversible de COX-1
- **Clopidogrel**: Inhibidor de receptor P2Y12
- **Prasugrel**: Mayor potencia que clopidogrel
- **Ticagrelor**: Inhibidor reversible, acción más rápida

#### Beta-bloqueadores
- **Mecanismo**: Bloqueo de receptores beta-adrenérgicos
- **Indicaciones**: Post-infarto, insuficiencia cardíaca, hipertensión
- **Tipos**: Selectivos (metoprolol) vs no selectivos (propranolol)
- **Efectos adversos**: Fatiga, broncoespasmo, disfunción sexual

#### Inhibidores de ECA y ARA-II
- **Mecanismo**: Bloqueo del sistema renina-angiotensina
- **Indicaciones**: Hipertensión, insuficiencia cardíaca, diabetes
- **Beneficios**: Reducción de mortalidad cardiovascular
- **Efectos adversos**: Tos seca (IECA), hiperpotasemia

#### Estatinas
- **Mecanismo**: Inhibición de HMG-CoA reductasa
- **Efectos pleiotrópicos**: Antiinflamatorio, estabilización de placa
- **Tipos**: Hidrofílicas (pravastatina) vs lipofílicas (atorvastatina)
- **Monitoreo**: Función hepática, síntomas musculares

## Insuficiencia Cardíaca

### Clasificación y Diagnóstico

#### Tipos de Insuficiencia Cardíaca
- **HFrEF**: Fracción de eyección <40%
- **HFpEF**: Fracción de eyección ≥50%
- **HFmrEF**: Fracción de eyección 40-49%
- **Aguda vs crónica**: Tiempo de desarrollo de síntomas

#### Síntomas y Signos
- **Disnea**: De esfuerzo, paroxística nocturna, ortopnea
- **Fatiga**: Limitación en actividades diarias
- **Edema**: Periférico, ascitis en casos severos
- **Signos**: Estertores pulmonares, ingurgitación yugular

#### Estudios Diagnósticos
- **BNP/NT-proBNP**: Valores elevados sugieren insuficiencia cardíaca
- **Ecocardiograma**: Evaluación de función sistólica y diastólica
- **Radiografía de tórax**: Congestión pulmonar, cardiomegalia
- **ECG**: Alteraciones que sugieren cardiopatía subyacente

### Tratamiento de la Insuficiencia Cardíaca

#### HFrEF - Tratamiento Farmacológico
- **IECA/ARA-II**: Primera línea, iniciar dosis baja y titular
- **Beta-bloqueadores**: Metoprolol, carvedilol, bisoprolol
- **Antagonistas de aldosterona**: Espironolactona, eplerenona
- **ARNI**: Sacubitrilo/valsartán superior a IECA

#### Dispositivos
- **Marcapasos**: Bradiarritmias sintomáticas
- **Terapia de resincronización**: QRS ancho >150 ms
- **Desfibrilador implantable**: Prevención de muerte súbita
- **Dispositivos de asistencia**: Puente a trasplante

#### Trasplante Cardíaco
- **Indicaciones**: Insuficiencia cardíaca terminal refractaria
- **Contraindicaciones**: Edad >70 años, comorbilidades severas
- **Evaluación**: Estudio exhaustivo multisistémico
- **Resultados**: Supervivencia >85% al año

## Arritmias Cardíacas

### Fibrilación Auricular

#### Epidemiología y Factores de Riesgo
- **Prevalencia**: 2-3% de población general
- **Factores de riesgo**: Edad, hipertensión, diabetes, apnea del sueño
- **Clasificación**: Paroxística, persistente, permanente
- **Complicaciones**: Accidente cerebrovascular, insuficiencia cardíaca

#### Anticoagulación
- **Score CHA2DS2-VASc**: Evaluación de riesgo embólico
- **Anticoagulantes**: Warfarina, apixabán, rivaroxabán, dabigatrán
- **Objetivo INR**: 2.0-3.0 para warfarina
- **Monitoreo**: INR mensual para warfarina

#### Control de Ritmo vs Frecuencia
- **Control de frecuencia**: Beta-bloqueadores, calcio-antagonistas
- **Control de ritmo**: Antiarrítmicos, cardioversión, ablación
- **Ablación**: Aislamiento de venas pulmonares
- **Indicaciones de ritmo**: Síntomas severos, insuficiencia cardíaca

### Muerte Súbita Cardíaca

#### Prevención Primaria
- **Factores de riesgo**: Disfunción ventricular severa, antecedentes familiares
- **Desfibrilador implantable**: FE ≤35% a pesar de tratamiento óptimo
- **Estratificación**: Estudios no invasivos e invasivos
- **Medicamentos**: Beta-bloqueadores, amiodarona en casos específicos

#### Prevención Secundaria
- **Sobrevivientes**: Fibrilación ventricular, taquicardia ventricular sostenida
- **Desfibrilador**: Indicación clase I
- **Ablación**: Si taquicardia ventricular recurrente
- **Seguimiento**: Evaluación regular de dispositivo

## Futuro de la Cardiología

### Medicina Personalizada

#### Farmacogenómica
- **CYP2C19**: Metabolismo de clopidogrel
- **SLCO1B1**: Toxicidad por estatinas
- **Dosificación**: Ajuste según genotipo
- **Implementación**: Gradual en centros especializados

#### Biomarcadores
- **Troponinas de alta sensibilidad**: Diagnóstico precoz de infarto
- **Biomarcadores de insuficiencia cardíaca**: NT-proBNP, ST2
- **Predicción de riesgo**: Múltiples biomarcadores combinados
- **Monitoreo**: Seguimiento de respuesta a tratamiento

### Tecnología Digital

#### Telemedicina
- **Monitoreo remoto**: Dispositivos implantables, vestibles
- **Consultas virtuales**: Seguimiento de pacientes crónicos
- **Aplicaciones móviles**: Recordatorio de medicamentos, ejercicio
- **Inteligencia artificial**: Análisis de ECG, predicción de riesgo

#### Dispositivos Vestibles
- **Smartwatches**: Detección de fibrilación auricular
- **Monitores continuos**: Presión arterial, glucosa
- **Integración**: Sistemas de salud electrónicos
- **Validación**: Estudios clínicos en progreso

### Terapias Emergentes

#### Terapia Génica
- **Investigación**: Angiogénesis terapéutica
- **Blancos**: Factores de crecimiento vascular
- **Fase clínica**: Estudios preliminares prometedores
- **Futuro**: Personalización según perfil genético

#### Medicina Regenerativa
- **Células madre**: Reparación de tejido cardíaco
- **Ingeniería tisular**: Construcción de válvulas cardíacas
- **Desafíos**: Integración, funcionalidad a largo plazo
- **Perspectivas**: Revolución en trasplante cardíaco

## Conclusiones

Las enfermedades cardiovasculares representan un desafío complejo que requiere un enfoque integral abarcando desde la prevención primaria hasta el tratamiento de condiciones avanzadas. La comprensión profunda de los factores de riesgo, tanto modificables como no modificables, es fundamental para desarrollar estrategias efectivas de prevención y tratamiento.

La prevención sigue siendo la piedra angular en la lucha contra las enfermedades cardiovasculares. Las intervenciones en el estilo de vida, incluyendo una alimentación saludable, actividad física regular, cesación del tabaquismo y manejo del estrés, han demostrado repetidamente su eficacia en la reducción del riesgo cardiovascular. La implementación de estas medidas a nivel poblacional podría prevenir hasta el 80% de las enfermedades cardiovasculares prematuras.

El tratamiento farmacológico ha evolucionado significativamente, con evidencia robusta que respalda el uso de estatinas, inhibidores de ECA, beta-bloqueadores y antiagregantes plaquetarios en la prevención y tratamiento de eventos cardiovasculares. La terapia personalizada, basada en características individuales del paciente, promete optimizar aún más los resultados terapéuticos.

Los avances tecnológicos han revolucionado tanto el diagnóstico como el tratamiento de las enfermedades cardiovasculares. Desde técnicas de imagen no invasivas hasta dispositivos implantables sofisticados, la tecnología continúa expandiendo nuestras capacidades terapéuticas y mejorando los resultados para los pacientes.

La medicina del futuro en cardiología se perfila hacia un enfoque cada vez más personalizado, incorporando farmacogenómica, biomarcadores específicos y tecnología digital para el monitoreo continuo y la toma de decisiones clínicas. La telemedicina y los dispositivos vestibles prometen democratizar el acceso a cuidados especializados y mejorar el seguimiento de pacientes crónicos.

Sin embargo, persisten desafíos significativos, incluyendo las disparidades en el acceso a cuidados de salud, la adherencia a tratamientos a largo plazo y la implementación efectiva de medidas preventivas a nivel poblacional. La colaboración entre profesionales de la salud, sistemas de salud, gobiernos y comunidades será esencial para abordar estos desafíos.

El futuro de la cardiología es prometedor, con investigaciones continuas que prometen nuevas terapias y enfoques innovadores. La medicina regenerativa, la terapia génica y los avances en inteligencia artificial abren nuevas posibilidades para el tratamiento de enfermedades cardiovasculares previamente consideradas intratable.

En última instancia, la prevención y el tratamiento exitoso de las enfermedades cardiovasculares requieren un compromiso a largo plazo tanto de los profesionales de la salud como de los pacientes y las comunidades. Solo a través de esfuerzos coordinados y sostenidos podremos reducir significativamente la carga global de estas enfermedades y mejorar la salud cardiovascular de nuestras poblaciones.`
    }
  ];

  useEffect(() => {
    const foundArticle = articles.find(a => a.id === id);
    setArticle(foundArticle || null);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen blog-container flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-4">El artículo que buscas no existe o ha sido removido.</p>
          <Button onClick={() => window.history.back()}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen blog-container">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver al Blog
            </Button>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Contenido Principal */}
            <div className="lg:col-span-3">
              {/* Header del Artículo */}
              <header className="mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg mb-6"
                />
                
                <div className="space-y-4">
                  <Badge variant="secondary" className="text-sm">
                    {article.category}
                  </Badge>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    {article.title}
                  </h1>
                  
                  <p className="text-lg blog-text-light leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm blog-text-light">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime} min de lectura
                    </div>
                    <div>Por {article.author}</div>
                  </div>
                  
                  <SocialShare 
                    title={article.title} 
                    url={window.location.href} 
                  />
                </div>
              </header>

              {/* Contenido del Artículo */}
              <article 
                className="article-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-blog-border">
                <h3 className="font-semibold mb-4">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Navegación entre artículos */}
              <div className="mt-12 pt-8 border-t border-blog-border">
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Artículo Anterior
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    Siguiente Artículo
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <TableOfContents content={article.content} />
                
                {/* Información del autor */}
                <Card className="p-6 blog-card">
                  <h3 className="font-semibold mb-4">Sobre el Autor</h3>
                  <div className="space-y-3">
                    <div className="font-medium">{article.author}</div>
                    <p className="text-sm blog-text-light">
                      Especialista en {article.category} con amplia experiencia en investigación 
                      y práctica clínica. Comprometido con la educación médica y la divulgación científica.
                    </p>
                  </div>
                </Card>

                {/* Artículos relacionados */}
                <Card className="p-6 blog-card">
                  <h3 className="font-semibold mb-4">Artículos Relacionados</h3>
                  <div className="space-y-4">
                    {articles
                      .filter(a => a.id !== article.id && a.category === article.category)
                      .slice(0, 3)
                      .map(relatedArticle => (
                        <div key={relatedArticle.id} className="border-b border-blog-border pb-4 last:border-b-0">
                          <h4 className="font-medium text-sm mb-2 line-clamp-2">
                            <a 
                              href={`/blog/${relatedArticle.id}`}
                              className="hover:text-blue-600 transition-colors"
                            >
                              {relatedArticle.title}
                            </a>
                          </h4>
                          <p className="text-xs blog-text-light">
                            {relatedArticle.readTime} min de lectura
                          </p>
                        </div>
                      ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
