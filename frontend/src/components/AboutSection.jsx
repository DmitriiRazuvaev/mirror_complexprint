import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { repairProcessSteps } from '../data/mock';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Довольных клиентов' },
    { icon: Award, value: '15+', label: 'Лет опыта' },
    { icon: CheckCircle, value: '99%', label: 'Успешных ремонтов' },
    { icon: Clock, value: '24/7', label: 'Доступная поддержка' }
  ];

  const getIconComponent = (iconName) => {
    const icons = {
      FileText: () => <span className="text-2xl">📄</span>,
      Search: () => <span className="text-2xl">🔍</span>,
      Wrench: () => <span className="text-2xl">🔧</span>,
      CheckCircle: () => <span className="text-2xl">✅</span>
    };
    return icons[iconName] || (() => <span className="text-2xl">⚙️</span>);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
            О ComplexPrint
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Нам доверяют
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
              лидеры отрасли
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Качество нашего мастерства подтверждается обширным опытом обслуживания крупных компаний и накопленным опытом работы в крупных сервисных центрах. Мы ваш надежный партнер для всех потребностей в обслуживании печатного оборудования.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Repair Process */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Наш процесс ремонта</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairProcessSteps.map((step, index) => {
              const IconComponent = getIconComponent(step.icon);
              return (
                <Card key={step.id} className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.id}</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Printer Error Guide Link */}
        <div className="mt-16 mb-8">
          <a 
            href="/printer-error-guide"
            className="block bg-white rounded-3xl p-8 lg:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-500 group"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">🖨️</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">⚠️</span>
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
              Не печатает принтер? Гид по ошибкам...
            </h3>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Подробные инструкции по устранению самых распространённых ошибок HP, Canon и Kyocera
            </p>
            <span className="inline-flex items-center text-purple-600 font-semibold text-lg group-hover:text-pink-500 transition-colors">
              Открыть полный гид
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Print Defects Guide Link */}
        <div className="mb-8">
          <a 
            href="/print-defects-guide"
            className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-500 group"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">📸</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">🔍</span>
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
              Справочник дефектов печати
            </h3>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Визуальный каталог с фотографиями: почему принтер печатает полосами, что делать если осыпается тонер, вертикальные полосы на печати
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <Badge className="bg-purple-500 text-white hover:bg-purple-600 px-3 py-1">Полосы</Badge>
              <Badge className="bg-pink-500 text-white hover:bg-pink-600 px-3 py-1">Пятна</Badge>
              <Badge className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1">Осыпание тонера</Badge>
              <Badge className="bg-green-500 text-white hover:bg-green-600 px-3 py-1">Грязная печать</Badge>
            </div>
            <span className="inline-flex items-center text-pink-600 font-semibold text-lg group-hover:text-purple-600 transition-colors">
              Открыть справочник с фото
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Experience Highlight */}
        <div className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Обширный опыт работы в сервисных центрах</h3>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Наши техники накопили ценный опыт работы в официальных сервисных центрах HP, Ricoh, Canon и Kyocera, обеспечивая ремонт высочайшего качества с использованием оригинальных деталей и проверенных методов.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-lg">Сертификат HP</Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-lg">Сертификат Ricoh</Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-lg">Сертификат Canon</Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-lg">Сертификат Kyocera</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
