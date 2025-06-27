
export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  views: number;
}

export const useBlogPosts = () => {
  const blogPosts: Record<string, BlogPostData> = {
    // IA Médica
    'ai-diagnostico-medico': {
      id: 'ai-diagnostico-medico',
      title: 'Inteligencia Artificial en el Diagnóstico Médico: Revolucionando la Medicina',
      excerpt: 'Descubre cómo la IA está transformando el diagnóstico médico con precisión sin precedentes.',
      author: 'Dr. Carlos Méndez',
      date: '2024-03-15',
      readTime: 8,
      category: 'IA Médica',
      tags: ['IA', 'Diagnóstico', 'Tecnología'],
      image: '/api/placeholder/800/400',
      views: 1250,
      content: `
# Inteligencia Artificial en el Diagnóstico Médico

La inteligencia artificial (IA) está revolucionando la medicina moderna, especialmente en el campo del diagnóstico médico. Esta tecnología promete transformar la manera en que los profesionales de la salud identifican y tratan enfermedades.

## ¿Qué es la IA en Diagnóstico Médico?

La IA en diagnóstico médico utiliza algoritmos de aprendizaje automático para analizar datos médicos y ayudar en la identificación de patologías. Estos sistemas pueden procesar grandes cantidades de información médica en segundos.

### Beneficios Principales

- **Precisión mejorada**: Los algoritmos pueden detectar patrones que el ojo humano podría pasar por alto
- **Velocidad de diagnóstico**: Reducción significativa en el tiempo de análisis
- **Consistencia**: Eliminación de la variabilidad humana en la interpretación

## Aplicaciones Actuales

### Radiología
Los sistemas de IA pueden analizar radiografías, tomografías y resonancias magnéticas con una precisión comparable o superior a la de los radiólogos expertos.

### Patología
El análisis de muestras histológicas mediante IA permite identificar células cancerosas y otras anomalías con gran precisión.

### Dermatología
Los algoritmos pueden diagnosticar cáncer de piel analizando fotografías de lesiones cutáneas.

## Desafíos y Limitaciones

A pesar de sus beneficios, la IA en diagnóstico médico enfrenta varios desafíos:

- **Regulación**: Necesidad de marcos regulatorios claros
- **Sesgo en los datos**: Los algoritmos pueden heredar sesgos de los datos de entrenamiento
- **Interpretabilidad**: Dificultad para explicar cómo llega a sus conclusiones

## El Futuro de la IA en Medicina

La IA continuará evolucionando y mejorando, prometiendo:

- Diagnósticos más tempranos y precisos
- Medicina personalizada basada en el análisis de datos individuales
- Reducción de costos en el sistema de salud

La integración de la IA en la práctica médica no reemplazará a los médicos, sino que los potenciará para brindar una atención más precisa y eficiente.
      `
    },

    'futuro-medicina-digital': {
      id: 'futuro-medicina-digital',
      title: 'El Futuro de la Medicina Digital: Tendencias y Predicciones para 2025',
      excerpt: 'Explora las tendencias emergentes en medicina digital y cómo transformarán la atención médica.',
      author: 'Dra. Laura Fernández',
      date: '2024-03-12',
      readTime: 10,
      category: 'IA Médica',
      tags: ['Medicina Digital', 'Futuro', 'Tecnología', 'Telemedicina'],
      image: '/api/placeholder/800/400',
      views: 980,
      content: `
# El Futuro de la Medicina Digital

La medicina digital está experimentando una transformación acelerada. Las nuevas tecnologías están redefiniendo cómo se presta la atención médica, desde la consulta hasta el tratamiento.

## Tendencias Emergentes

### Telemedicina Avanzada
La telemedicina ha evolucionado más allá de las videollamadas simples:
- Consultas virtuales con realidad aumentada
- Diagnóstico remoto con dispositivos IoT
- Monitoreo continuo de pacientes crónicos

### Inteligencia Artificial Predictiva
Los algoritmos de IA ahora pueden:
- Predecir brotes de enfermedades
- Identificar pacientes de alto riesgo
- Optimizar tratamientos personalizados

## Medicina Personalizada

### Genómica y Farmacogenómica
- Tratamientos basados en el perfil genético individual
- Medicamentos personalizados según la respuesta genética
- Prevención basada en predisposición genética

### Medicina de Precisión
- Análisis de big data para tratamientos individualizados
- Biomarcadores específicos para cada paciente
- Terapias dirigidas según características moleculares

## Dispositivos Wearables

### Monitoreo Continuo
Los dispositivos wearables modernos pueden monitorear:
- Ritmo cardíaco y variabilidad
- Niveles de glucosa no invasivos
- Patrones de sueño y actividad
- Presión arterial continua

### Alertas Tempranas
- Detección de fibrilación auricular
- Alertas de caídas en adultos mayores
- Monitoreo de medicación

## Realidad Virtual y Aumentada

### Aplicaciones Terapéuticas
- Terapia de exposición para fobias
- Rehabilitación post-accidente cerebrovascular
- Manejo del dolor crónico
- Entrenamiento de habilidades cognitivas

### Educación Médica
- Simulaciones quirúrgicas avanzadas
- Anatomía interactiva 3D
- Entrenamiento de procedimientos complejos

## Blockchain en Salud

### Seguridad de Datos
- Historiales médicos inmutables
- Intercambio seguro de información
- Privacidad del paciente garantizada

### Interoperabilidad
- Estándares universales de datos
- Acceso controlado por el paciente
- Reducción de duplicación de pruebas

## Impacto Social y Económico

### Democratización de la Salud
- Acceso a especialistas en áreas remotas
- Reducción de desigualdades en salud
- Costos de atención más accesibles

### Transformación del Rol Médico
- Médicos como intérpretes de datos
- Más tiempo para la atención personalizada
- Colaboración human-IA

## Desafíos Futuros

### Éticos y Regulatorios
- Privacidad de datos genéticos
- Consentimiento informado digital
- Responsabilidad legal de las decisiones de IA

### Tecnológicos
- Interoperabilidad entre sistemas
- Ciberseguridad en dispositivos médicos
- Sesgo algorítmico

El futuro de la medicina digital promete una atención más personalizada, accesible y efectiva, pero requiere abordar importantes desafíos éticos y tecnológicos.
      `
    },

    'casos-exito-ia-medica': {
      id: 'casos-exito-ia-medica',
      title: 'Casos de Éxito en IA Médica: Historias Reales de Transformación',
      excerpt: 'Conoce casos reales donde la IA ha salvado vidas y mejorado significativamente la atención médica.',
      author: 'Dr. Roberto Silva',
      date: '2024-03-08',
      readTime: 12,
      category: 'IA Médica',
      tags: ['IA', 'Casos de Éxito', 'Medicina', 'Innovación'],
      image: '/api/placeholder/800/400',
      views: 1560,
      content: `
# Casos de Éxito en IA Médica

La inteligencia artificial ha demostrado su valor en medicina a través de casos reales que han salvado vidas y mejorado significativamente la atención médica.

## Detección Temprana de Cáncer de Mama

### Hospital Clínic de Barcelona
Un sistema de IA desarrollado en colaboración con Google DeepMind ha logrado:
- **Reducción del 25%** en falsos positivos
- **Mejora del 15%** en detección de cáncer
- **Tiempo de análisis**: De 30 minutos a 3 segundos

#### Caso Específico
María, de 45 años, tenía mamografías normales según evaluación inicial. El sistema de IA detectó anomalías microscópicas que llevaron al diagnóstico temprano de carcinoma ductal invasivo en etapa I, permitiendo un tratamiento exitoso con cirugía conservadora.

## Diagnóstico de Retinopatía Diabética

### Programa Aravind Eye Care System (India)
- **Pacientes examinados**: Más de 200,000 al año
- **Sensibilidad**: 96.1% en detección de retinopatía
- **Especificidad**: 95.8%
- **Impacto**: Prevención de ceguera en 15,000 pacientes

#### Historia de Impacto
Raj Kumar, agricultor de 52 años con diabetes tipo 2, no tenía acceso a especialistas. A través del programa de screening con IA, se detectó retinopatía diabética severa, permitiendo tratamiento laser oportuno que preservó su visión.

## Análisis de Imágenes Dermatológicas

### Stanford University - Proyecto SkinVision
- **Precisión**: 91% en detección de melanoma
- **Comparable**: Dermatólogos certificados
- **Acceso**: Aplicación móvil disponible globalmente

#### Caso Transformador
James, de 34 años, usó la aplicación para analizar una marca en su espalda. El algoritmo sugirió evaluación urgente. El dermatólogo confirmó melanoma en etapa temprana, salvando su vida mediante cirugía oportuna.

## Predicción de Sepsis

### Johns Hopkins Hospital
Sistema TREWS (Targeted Real-time Early Warning System):
- **Reducción de mortalidad**: 18%
- **Tiempo de tratamiento**: Reducido en 1.5 horas promedio
- **Alertas tempranas**: 6 horas antes del diagnóstico tradicional

#### Caso de Emergencia
Sarah Thompson, de 67 años, ingresó por neumonía. El sistema TREWS detectó patrones sutiles en sus signos vitales y laboratorios, alertando sobre riesgo de sepsis 4 horas antes de los síntomas clínicos evidentes, permitiendo intervención temprana que salvó su vida.

## Análisis de Electrocardiogramas

### Apple Watch - Detección de Fibrilación Auricular
- **Usuarios monitoreados**: Más de 400,000
- **Precisión**: 84% en detección de FA
- **Diagnósticos nuevos**: 34% de usuarios con alertas

#### Historia Personal
David Martinez, de 58 años, recibió alerta de ritmo irregular en su Apple Watch durante ejercicio. La evaluación cardiológica confirmó fibrilación auricular, iniciando tratamiento anticoagulante que previno un posible accidente cerebrovascular.

## Diagnóstico Radiológico

### Aidoc - Detección de Hemorragia Intracraneal
- **Hospitales implementados**: Más de 300 globalmente
- **Reducción de tiempo**: 60% en diagnóstico
- **Precisión**: 95% en detección de hemorragias

#### Caso de Urgencia
Un paciente de 45 años llegó al hospital después de un accidente. La IA de Aidoc detectó inmediatamente hemorragia intracraneal en la tomografía, alertando al neurocirujano 20 minutos antes de la revisión rutinaria, permitiendo cirugía de emergencia exitosa.

## Medicina Psiquiátrica

### Ellipsis Health - Análisis de Voz para Depresión
- **Precisión**: 83% en detección de depresión
- **Análisis**: Patrones de habla en 30 segundos
- **Escalabilidad**: Evaluación remota masiva

#### Impacto Comunitario
Durante la pandemia, un programa piloto en San Francisco utilizó esta tecnología para evaluar 1,000 adultos mayores, identificando 156 casos de depresión no diagnosticada, permitiendo intervención temprana y mejorando la calidad de vida.

## Oncología Pediátrica

### Memorial Sloan Kettering - Watson for Oncology
- **Concordancia**: 85% con decisiones de oncólogos
- **Tiempo de análisis**: Reducido de horas a minutos
- **Acceso**: Hospitales en países en desarrollo

#### Historia Esperanzadora
Un niño de 8 años en Kenia con leucemia linfoblástica aguda recibió recomendaciones de tratamiento a través de Watson for Oncology, accediendo a protocolos de clase mundial que no estaban disponibles localmente, logrando remisión completa.

## Lecciones Aprendidas

### Factores de Éxito
1. **Colaboración médico-tecnológica**: Trabajo conjunto entre clínicos e ingenieros
2. **Validación rigurosa**: Estudios clínicos prospectivos
3. **Integración fluida**: Sistemas que se adaptan al flujo de trabajo existente
4. **Educación continua**: Capacitación del personal médico

### Desafíos Superados
- **Resistencia inicial**: Educación y demostración de beneficios
- **Integración técnica**: Compatibilidad con sistemas existentes
- **Regulación**: Cumplimiento con normativas de dispositivos médicos

Estos casos demuestran que la IA en medicina no es solo una promesa futura, sino una realidad presente que está salvando vidas y mejorando la calidad de la atención médica a nivel global.
      `
    },

    // Oncología
    'cancer-mama-deteccion': {
      id: 'cancer-mama-deteccion',
      title: 'Detección Temprana del Cáncer de Mama: Guía Completa 2024',
      excerpt: 'Todo lo que necesitas saber sobre la detección temprana del cáncer de mama y las últimas tecnologías.',
      author: 'Dra. Ana Rodríguez',
      date: '2024-03-10',
      readTime: 12,
      category: 'Oncología',
      tags: ['Cáncer', 'Mama', 'Detección', 'Prevención'],
      image: '/api/placeholder/800/400',
      views: 2100,
      content: `
# Detección Temprana del Cáncer de Mama

El cáncer de mama es uno de los tipos de cáncer más comunes en mujeres, pero la detección temprana puede salvar vidas. Esta guía completa te ayudará a entender todo sobre la detección precoz.

## Importancia de la Detección Temprana

La detección temprana del cáncer de mama es crucial porque:

- Aumenta significativamente las tasas de supervivencia
- Permite tratamientos menos invasivos
- Mejora la calidad de vida post-tratamiento
- Reduce los costos del tratamiento

## Métodos de Detección

### Autoexamen de Mama
El autoexamen mensual es fundamental para la detección temprana.

#### Técnica del Autoexamen
1. **Inspección visual**: Frente al espejo, observa cambios en forma, tamaño o textura
2. **Palpación**: Con movimientos circulares, examina toda la mama
3. **Frecuencia**: Una vez al mes, preferentemente después de la menstruación

### Mamografía
La mamografía es el método de detección más efectivo para mujeres mayores de 40 años.

#### Tipos de Mamografía
- **Mamografía de detección**: Para mujeres sin síntomas
- **Mamografía diagnóstica**: Para investigar anomalías específicas
- **Mamografía digital**: Tecnología más avanzada con mejor resolución

### Ecografía Mamaria
Complementa la mamografía, especialmente útil en:
- Mujeres jóvenes con tejido mamario denso
- Evaluación de masas palpables
- Guía para biopsias

### Resonancia Magnética
Reservada para casos específicos como:
- Alto riesgo genético
- Evaluación de extensión del cáncer
- Seguimiento post-tratamiento

## Factores de Riesgo

### Factores No Modificables
- Edad avanzada
- Género femenino
- Historia familiar de cáncer
- Mutaciones genéticas (BRCA1, BRCA2)

### Factores Modificables
- Obesidad
- Consumo de alcohol
- Terapia hormonal prolongada
- Sedentarismo

## Señales de Alerta

Consulta inmediatamente si notas:
- Bulto o masa en la mama o axila
- Cambios en la forma o tamaño de la mama
- Secreción del pezón
- Cambios en la piel (enrojecimiento, descamación)
- Dolor persistente

## Programas de Detección

### Recomendaciones por Edad
- **20-39 años**: Autoexamen mensual y examen clínico anual
- **40-49 años**: Mamografía anual opcional según factores de riesgo
- **50+ años**: Mamografía anual obligatoria

## Tecnologías Emergentes

### Inteligencia Artificial
- Mejora la precisión del diagnóstico
- Reduce falsos positivos
- Acelera el proceso de interpretación

### Tomosíntesis (Mamografía 3D)
- Mejor visualización del tejido mamario
- Reducción de falsos positivos
- Especialmente útil en mamas densas

## Prevención y Estilo de Vida

### Hábitos Saludables
- Mantener peso corporal saludable
- Ejercicio regular
- Dieta rica en frutas y verduras
- Limitar el consumo de alcohol

### Monitoreo Genético
Para mujeres con alto riesgo familiar:
- Asesoramiento genético
- Pruebas de mutaciones BRCA
- Seguimiento especializado

La detección temprana del cáncer de mama es responsabilidad compartida entre el paciente y el sistema de salud. La educación, la prevención y el acceso a tecnologías de detección son clave para reducir la mortalidad por esta enfermedad.
      `
    },

    'cancer-prostata-screening': {
      id: 'cancer-prostata-screening',
      title: 'Cáncer de Próstata: Screening y Diagnóstico Temprano en 2024',
      excerpt: 'Guía actualizada sobre el screening del cáncer de próstata y las mejores prácticas diagnósticas.',
      author: 'Dr. Fernando López',
      date: '2024-03-07',
      readTime: 11,
      category: 'Oncología',
      tags: ['Cáncer', 'Próstata', 'Screening', 'Urología'],
      image: '/api/placeholder/800/400',
      views: 1890,
      content: `
# Cáncer de Próstata: Screening y Diagnóstico Temprano

El cáncer de próstata es el segundo cáncer más común en hombres. El screening y diagnóstico temprano son fundamentales para mejorar las tasas de supervivencia y calidad de vida.

## Epidemiología del Cáncer de Próstata

### Estadísticas Globales
- **Incidencia**: 1.4 millones de casos nuevos anuales
- **Mortalidad**: 375,000 muertes por año
- **Supervivencia a 5 años**: 98% cuando se detecta temprano
- **Edad promedio de diagnóstico**: 66 años

### Factores de Riesgo
#### No Modificables
- Edad avanzada (>50 años)
- Raza afroamericana
- Historia familiar de cáncer de próstata
- Mutaciones genéticas (BRCA1, BRCA2)

#### Modificables
- Dieta alta en grasas saturadas
- Obesidad
- Sedentarismo
- Exposición a químicos industriales

## Métodos de Screening

### Antígeno Prostático Específico (PSA)
El PSA es el biomarcador más utilizado para el screening.

#### Valores de Referencia
- **Normal**: < 4 ng/mL
- **Zona gris**: 4-10 ng/mL
- **Elevado**: > 10 ng/mL
- **Muy elevado**: > 20 ng/mL

#### Factores que Afectan el PSA
- Edad del paciente
- Tamaño de la próstata
- Infección o inflamación
- Eyaculación reciente
- Ejercicio intenso

### PSA Libre vs PSA Total
- **Ratio PSA libre/total**: < 15% sugiere mayor riesgo de cáncer
- **Utilidad**: Especialmente en zona gris de PSA (4-10 ng/mL)

### Examen Digital Rectal (EDR)
- **Técnica**: Palpación de la próstata a través del recto
- **Hallazgos sospechosos**: Nódulos, asimetría, dureza
- **Limitaciones**: Solo detecta cáncer en zona periférica

## Nuevas Tecnologías de Screening

### Biomarcadores Avanzados
#### Índice de Salud Prostática (PHI)
- Combina PSA total, PSA libre y pro-PSA
- Mejor especificidad que PSA solo
- Reduce biopsias innecesarias

#### 4Kscore
- Algoritmo que incluye 4 calicreínas
- Predicción de cáncer de alto grado
- Personalización del riesgo

### Resonancia Magnética Multiparamétrica (mpMRI)
- **Indicaciones**: PSA elevado, EDR anormal
- **Ventajas**: Localización precisa de lesiones
- **PI-RADS**: Sistema de clasificación estandarizado

### Biopsia Dirigida por Fusión
- Combinación de imágenes de MRI y ecografía
- Mayor precisión en la toma de muestras
- Reducción de biopsias negativas

## Protocolo de Screening Recomendado

### Hombres de Riesgo Promedio
- **Inicio**: 50-55 años
- **Frecuencia**: Cada 2-4 años
- **Decisión compartida**: Médico-paciente

### Hombres de Alto Riesgo
- **Inicio**: 40-45 años
- **Frecuencia**: Anual
- **Incluye**: Afroamericanos, historia familiar

### Hombres de Muy Alto Riesgo
- **Inicio**: 40 años
- **Frecuencia**: Anual
- **Incluye**: Múltiples familiares afectados, mutaciones BRCA

## Interpretación de Resultados

### PSA Elevado - Protocolo de Evaluación
1. **Repetir PSA**: Confirmar elevación
2. **Historia clínica**: Factores confundentes
3. **Examen físico**: EDR detallado
4. **Biomarcadores adicionales**: Considerar PHI o 4Kscore
5. **Imagen**: mpMRI si disponible
6. **Biopsia**: Según estratificación de riesgo

### Estratificación de Riesgo
#### Bajo Riesgo
- PSA < 10 ng/mL
- Gleason ≤ 6
- Estadio T1c-T2a

#### Riesgo Intermedio
- PSA 10-20 ng/mL
- Gleason 7
- Estadio T2b-T2c

#### Alto Riesgo
- PSA > 20 ng/mL
- Gleason ≥ 8
- Estadio ≥ T3a

## Vigilancia Activa

### Criterios de Elegibilidad
- Gleason 6 o 3+4 limitado
- PSA < 10 ng/mL
- Menos de 3 cilindros positivos
- Menos de 50% de cáncer por cilindro

### Protocolo de Seguimiento
- **PSA**: Cada 3-6 meses
- **EDR**: Cada 6-12 meses
- **Biopsia**: A los 12 meses, luego según protocolo
- **MRI**: Baseline y seguimiento

## Tratamiento Según Estadio

### Enfermedad Localizada
- **Cirugía**: Prostatectomía radical
- **Radioterapia**: Externa o braquiterapia
- **Vigilancia activa**: Casos seleccionados

### Enfermedad Localmente Avanzada
- **Terapia multimodal**: Cirugía/radioterapia + hormonoterapia
- **Duración**: 18-36 meses de deprivación androgénica

### Enfermedad Metastásica
- **Primera línea**: Deprivación androgénica
- **Resistencia**: Quimioterapia, nuevos antiandrógenos
- **Cuidados paliativos**: Manejo de síntomas

## Prevención y Lifestyle

### Modificaciones Dietéticas
- **Aumentar**: Tomates (licopeno), pescado, verduras crucíferas
- **Reducir**: Carnes rojas, grasas saturadas, lácteos
- **Suplementos**: Vitamina D, omega-3

### Ejercicio y Actividad Física
- **Beneficios**: Reducción del riesgo, mejora de supervivencia
- **Recomendación**: 150 minutos de ejercicio moderado/semana
- **Tipo**: Aeróbico y entrenamiento de resistencia

## Perspectivas Futuras

### Medicina de Precisión
- **Perfiles genómicos**: Oncotype DX, Decipher
- **Terapias dirigidas**: Inhibidores PARP, inmunoterapia
- **Medicina personalizada**: Tratamiento según biomarcadores

### Inteligencia Artificial
- **Análisis de imágenes**: Mejora de interpretación radiológica
- **Predicción de resultados**: Algoritmos de machine learning
- **Diagnóstico**: Análisis de patrones en biomarcadores

El screening y diagnóstico temprano del cáncer de próstata continúa evolucionando con nuevas tecnologías y enfoques personalizados que prometen mejorar significativamente los resultados para los pacientes.
      `
    },

    // Endocrinología
    'diabetes-control-glucemia': {
      id: 'diabetes-control-glucemia',
      title: 'Control de Glucemia en Diabetes: Estrategias Modernas y Efectivas',
      excerpt: 'Aprende las mejores estrategias para el control efectivo de la glucemia en pacientes diabéticos.',
      author: 'Dr. Miguel Torres',
      date: '2024-03-05',
      readTime: 10,
      category: 'Endocrinología',
      tags: ['Diabetes', 'Glucemia', 'Control', 'Tratamiento'],
      image: '/api/placeholder/800/400',
      views: 1800,
      content: `
# Control de Glucemia en Diabetes

El control efectivo de la glucemia es fundamental para prevenir complicaciones a largo plazo en pacientes con diabetes. Esta guía presenta las estrategias más modernas y efectivas.

## Objetivos del Control Glucémico

### Metas Generales
- HbA1c < 7% para la mayoría de adultos
- Glucemia preprandial: 80-130 mg/dL
- Glucemia postprandial: < 180 mg/dL

### Individualización de Objetivos
Los objetivos deben personalizarse según:
- Edad del paciente
- Comorbilidades
- Riesgo de hipoglucemia
- Expectativa de vida

## Monitoreo de Glucemia

### Automonitoreo Capilar
- Frecuencia según tipo de diabetes y tratamiento
- Técnica correcta de medición
- Registro y análisis de resultados

### Monitoreo Continuo de Glucosa (MCG)
Ventajas del MCG:
- Medición continua las 24 horas
- Alertas de hipoglucemia/hiperglucemia
- Tendencias glucémicas en tiempo real
- Mejor control sin pinchazos frecuentes

### Hemoglobina Glicosilada (HbA1c)
- Refleja el control glucémico de 2-3 meses
- Debe medirse cada 3-6 meses
- Objetivo personalizado según paciente

## Estrategias de Tratamiento

### Diabetes Tipo 1
#### Insulinoterapia Intensiva
- Insulina basal: acción prolongada
- Insulina prandial: acción rápida
- Ajuste según monitoreo continuo

#### Sistemas de Infusión
- Bombas de insulina
- Sistemas de asa cerrada
- Páncreas artificial

### Diabetes Tipo 2
#### Escalón Terapéutico
1. **Primera línea**: Metformina
2. **Segunda línea**: Combinaciones según perfil del paciente
3. **Insulina**: Cuando sea necesario

#### Nuevos Medicamentos
- Inhibidores SGLT2
- Agonistas GLP-1
- Inhibidores DPP-4

## Manejo de Hipoglucemia

### Reconocimiento de Síntomas
- Sudoración
- Temblor
- Hambre
- Confusión
- Irritabilidad

### Tratamiento
1. **Glucemia < 70 mg/dL**: 15g de carbohidratos simples
2. **Recheck**: A los 15 minutos
3. **Repetir**: Si glucemia sigue < 70 mg/dL

### Prevención
- Ajuste adecuado de medicación
- Horarios regulares de comida
- Educación del paciente y familia

## Tecnología en Diabetes

### Aplicaciones Móviles
- Registro de glucemia
- Cálculo de carbohidratos
- Recordatorios de medicación
- Comunicación con equipo médico

### Inteligencia Artificial
- Predicción de hipoglucemias
- Optimización de dosis de insulina
- Análisis de patrones glucémicos

## Complicaciones del Mal Control

### Agudas
- Cetoacidosis diabética
- Síndrome hiperosmolar
- Hipoglucemia severa

### Crónicas
- Retinopatía diabética
- Nefropatía diabética
- Neuropatía diabética
- Enfermedad cardiovascular

## Educación del Paciente

### Elementos Clave
- Técnicas de automonitoreo
- Reconocimiento de síntomas
- Manejo de situaciones especiales
- Importancia de la adherencia

### Herramientas Educativas
- Programas estructurados
- Material didáctico
- Apoyo de educadores en diabetes
- Grupos de apoyo

El control efectivo de la glucemia requiere un enfoque integral que combine tecnología moderna, educación del paciente y seguimiento médico continuo. La personalización del tratamiento es clave para el éxito a largo plazo.
      `
    },

    // Cardiología
    'enfermedad-cardiovascular-prevencion': {
      id: 'enfermedad-cardiovascular-prevencion',
      title: 'Prevención de Enfermedades Cardiovasculares: Estrategias Basadas en Evidencia',
      excerpt: 'Descubre las estrategias más efectivas para prevenir enfermedades cardiovasculares según la evidencia científica actual.',
      author: 'Dr. Antonio Martín',
      date: '2024-03-03',
      readTime: 14,
      category: 'Cardiología',
      tags: ['Cardiovascular', 'Prevención', 'Factores de Riesgo', 'Corazón'],
      image: '/api/placeholder/800/400',
      views: 2250,
      content: `
# Prevención de Enfermedades Cardiovasculares

Las enfermedades cardiovasculares son la principal causa de muerte a nivel mundial. Sin embargo, la mayoría son prevenibles mediante estrategias basadas en evidencia científica sólida.

## Epidemiología de las Enfermedades Cardiovasculares

### Impacto Global
- **17.9 millones** de muertes anuales por ECV
- **31%** de todas las muertes globales
- **75%** ocurren en países de ingresos bajos y medios
- **Costo económico**: $863 mil millones anuales

### Tipos Principales
- **Cardiopatía coronaria**: 42% de muertes por ECV
- **Accidente cerebrovascular**: 38% de muertes por ECV
- **Insuficiencia cardíaca**: 9% de muertes por ECV
- **Otras**: 11% de muertes por ECV

## Factores de Riesgo Cardiovascular

### Factores No Modificables
#### Edad
- **Hombres**: Riesgo aumenta después de los 45 años
- **Mujeres**: Riesgo aumenta después de los 55 años
- **Incremento**: 2-3 veces por cada década

#### Género
- **Hombres**: Mayor riesgo antes de los 65 años
- **Mujeres**: Protección hormonal pre-menopausia
- **Post-menopausia**: Riesgo equivalente

#### Genética
- **Historia familiar**: Aumenta riesgo 2-4 veces
- **Mutaciones**: Hipercolesterolemia familiar
- **Polimorfismos**: Genes relacionados con lípidos

### Factores Modificables Mayores

#### Hipertensión Arterial
- **Prevalencia**: 1.13 mil millones de personas
- **Riesgo**: Cada 20 mmHg de PAS aumenta riesgo 2x
- **Meta**: < 130/80 mmHg en la mayoría de pacientes

#### Dislipidemia
- **LDL elevado**: Principal factor de riesgo
- **HDL bajo**: < 40 mg/dL hombres, < 50 mg/dL mujeres
- **Triglicéridos**: > 150 mg/dL aumenta riesgo

#### Diabetes Mellitus
- **Riesgo**: 2-4 veces mayor de ECV
- **Mecanismo**: Aterosclerosis acelerada
- **Control**: HbA1c < 7% reduce complicaciones

#### Tabaquismo
- **Riesgo**: 2-4 veces mayor
- **Mecanismo**: Disfunción endotelial, trombosis
- **Beneficio del cese**: Reducción de riesgo en 1 año

### Factores de Estilo de Vida

#### Sedentarismo
- **Riesgo**: 1.5-2 veces mayor
- **Recomendación**: 150 min/semana ejercicio moderado
- **Beneficio**: Reducción 20-30% riesgo ECV

#### Dieta Inadecuada
- **Dieta occidental**: Aumenta riesgo 30%
- **Dieta mediterránea**: Reduce riesgo 30%
- **Sodio**: > 2.3g/día aumenta riesgo

#### Obesidad
- **IMC > 30**: Aumenta riesgo 2-3 veces
- **Obesidad abdominal**: Cintura > 102 cm hombres, > 88 cm mujeres
- **Pérdida de peso**: 5-10% reduce riesgo significativamente

## Estrategias de Prevención Primaria

### Evaluación del Riesgo Cardiovascular

#### Calculadoras de Riesgo
- **SCORE2**: Europea, ajustada por región
- **ACC/AHA**: Americana, incluye múltiples factores
- **Framingham**: Clásica, ampliamente validada
- **QRISK**: Británica, incluye factores sociales

#### Estratificación de Riesgo
- **Bajo riesgo**: < 5% a 10 años
- **Riesgo intermedio**: 5-20% a 10 años
- **Alto riesgo**: > 20% a 10 años

### Intervenciones Farmacológicas

#### Estatinas
- **Indicación**: LDL > 190 mg/dL o riesgo > 7.5%
- **Beneficio**: Reducción 25-35% eventos cardiovasculares
- **Efectos adversos**: Miopatía (< 1%), diabetes (0.1%)

#### Antihipertensivos
- **Primera línea**: IECA, ARA-II, diuréticos, calcio-antagonistas
- **Meta**: < 130/80 mmHg mayoría de pacientes
- **Beneficio**: Reducción 20-25% eventos cardiovasculares

#### Antiagregantes
- **Aspirina**: 75-100 mg/día
- **Indicación**: Alto riesgo sin contraindicaciones
- **Beneficio**: Reducción 20% infarto de miocardio

### Intervenciones No Farmacológicas

#### Modificación Dietética
##### Dieta Mediterránea
- **Aceite de oliva**: Principal fuente de grasa
- **Frutas y verduras**: > 5 porciones/día
- **Pescado**: 2-3 veces/semana
- **Frutos secos**: 30g/día
- **Beneficio**: Reducción 30% eventos cardiovasculares

##### Restricción de Sodio
- **Objetivo**: < 2.3g/día (< 1.5g ideal)
- **Beneficio**: Reducción 2-8 mmHg PA sistólica
- **Fuentes**: Alimentos procesados (70%)

#### Ejercicio Físico
##### Prescripción de Ejercicio
- **Tipo**: Aeróbico + entrenamiento de resistencia
- **Intensidad**: Moderada (50-70% FC máx)
- **Duración**: 30-60 minutos
- **Frecuencia**: 5-7 días/semana

##### Beneficios Cardiovasculares
- **Reducción PA**: 4-9 mmHg sistólica
- **Mejora perfil lipídico**: ↑HDL, ↓TG
- **Control glucémico**: ↑Sensibilidad insulina
- **Pérdida de peso**: Combinado con dieta

#### Cesación Tabáquica
##### Estrategias
- **Consejería breve**: 3-5 minutos efectivo
- **Farmacoterapia**: Vareniclina, bupropión, TRN
- **Terapia conductual**: Grupos de apoyo
- **Seguimiento**: Múltiples intentos comunes

##### Beneficios
- **1 año**: Reducción 50% riesgo cardiovascular
- **5 años**: Riesgo similar a no fumador
- **Beneficio inmediato**: Mejora función endotelial

## Prevención Secundaria

### Post-Síndrome Coronario Agudo
#### Farmacoterapia Óptima
- **Doble antiagregación**: 12 meses
- **Estatina alta intensidad**: Objetivo LDL < 70 mg/dL
- **Beta bloqueador**: Reducción mortalidad
- **IECA/ARA-II**: Especialmente si disfunción VI

#### Rehabilitación Cardíaca
- **Ejercicio supervisado**: 12 semanas
- **Educación**: Estilo de vida, medicamentos
- **Apoyo psicológico**: Depresión/ansiedad
- **Beneficio**: Reducción 35% mortalidad cardiovascular

### Manejo de Factores de Riesgo Específicos

#### Diabetes y ECV
- **Control glucémico**: HbA1c < 7%
- **Presión arterial**: < 130/80 mmHg
- **LDL**: < 70 mg/dL (< 55 mg/dL si muy alto riesgo)
- **Antiagregación**: Aspirina si riesgo aumentado

#### Insuficiencia Cardíaca
- **IECA/ARA-II**: Primera línea
- **Beta bloqueadores**: Reducen mortalidad
- **Diuréticos**: Control de volumen
- **Dispositivos**: DAI, TRC según indicaciones

## Poblaciones Especiales

### Mujeres
#### Factores de Riesgo Únicos
- **Trastornos hipertensivos del embarazo**: Riesgo futuro
- **Menopausia precoz**: < 40 años
- **Enfermedades autoinmunes**: Lupus, artritis reumatoide

#### Consideraciones Especiales
- **Síntomas atípicos**: Fatiga, náuseas, dolor espalda
- **Tratamiento**: Mismas guías que hombres
- **Embarazo**: Manejo especializado factores de riesgo

### Adultos Mayores
#### Consideraciones
- **Fragilidad**: Impacta decisiones tratamiento
- **Polifarmacia**: Interacciones medicamentosas
- **Metas PA**: Menos estrictas (< 140/90 mmHg)
- **Beneficio estatinas**: Mantenido hasta 75-80 años

## Medicina Preventiva Personalizada

### Biomarcadores Emergentes
#### Tradicionales
- **Proteína C reactiva**: Inflamación sistémica
- **Homocisteína**: Metabolismo folatos
- **Lipoproteína (a)**: Factor genético

#### Avanzados
- **Troponina alta sensibilidad**: Lesión miocárdica
- **Péptidos natriuréticos**: Función cardíaca
- **Calcio coronario**: Aterosclerosis subclínica

### Genómica Cardiovascular
#### Scores Poligénicos
- **Predicción riesgo**: Mejora sobre factores tradicionales
- **Identificación temprana**: Riesgo elevado jóvenes
- **Medicina personalizada**: Tratamiento dirigido

### Inteligencia Artificial
#### Aplicaciones
- **Predicción riesgo**: Algoritmos machine learning
- **Imagen cardiovascular**: Análisis automatizado
- **Monitoreo continuo**: Dispositivos wearables

La prevención cardiovascular requiere un enfoque integral, personalizado y basado en evidencia que combine intervenciones farmacológicas y no farmacológicas, adaptadas al perfil de riesgo individual de cada paciente.
      `
    }
  };

  const getAllPosts = () => Object.values(blogPosts);
  const getPostById = (id: string) => blogPosts[id];
  const getPostsByCategory = (category: string) => 
    Object.values(blogPosts).filter(post => post.category === category);

  return {
    getAllPosts,
    getPostById,
    getPostsByCategory,
    blogPosts
  };
};
