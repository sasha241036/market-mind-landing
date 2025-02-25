
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Zap, Star, DollarSign, MessageSquare } from 'lucide-react';

const Index = () => {
  const aiTools = [
    { title: 'Маркетинговый аналитик', description: 'Анализ данных и создание отчетов' },
    { title: 'Контент стратег', description: 'Планирование и оптимизация контента' },
    { title: 'SMM специалист', description: 'Управление социальными сетями' },
    { title: 'Универсальный помощник', description: 'Поддержка во всех задачах' },
    { title: 'DALL-E генератор', description: 'Создание уникальных изображений' },
    { title: 'Генератор контента', description: 'Автоматическое создание текстов' },
  ];

  const benefits = [
    { 
      title: 'Безопасность', 
      description: 'Защита данных на высшем уровне',
      icon: Shield,
      iconColor: '#F90716',
      gradient: 'from-[#F90716] to-[#FDE1D3]'
    },
    { 
      title: 'Продвижение', 
      description: 'Новые возможности для роста',
      icon: TrendingUp,
      iconColor: '#FF5403',
      gradient: 'from-[#FF5403] to-[#FEC6A1]'
    },
    { 
      title: 'Автоматизация', 
      description: 'Экономия времени и ресурсов',
      icon: Zap,
      iconColor: '#FFCA03',
      gradient: 'from-[#FFCA03] to-[#FEF7CD]'
    },
  ];

  const testimonials = [
    {
      name: 'Анна М.',
      role: 'Маркетолог',
      comment: 'Market Mind помог мне увеличить эффективность работы в 2 раза!',
      rating: 5,
    },
    {
      name: 'Сергей К.',
      role: 'SMM менеджер',
      comment: 'Отличный инструмент для автоматизации рутинных задач.',
      rating: 5,
    },
  ];

  const plans = [
    {
      name: 'Старт',
      price: 'Бесплатно',
      balance: '50 ₽',
      features: ['Базовый доступ', '10 генераций в день', 'Поддержка по email'],
      recommended: false,
    },
    {
      name: 'Ассистент',
      price: '1500 ₽/мес',
      balance: '1500 ₽',
      features: ['Полный доступ', '100 генераций в день', '24/7 поддержка'],
      recommended: true,
    },
    {
      name: 'Маркетолог',
      price: '3000 ₽/мес',
      balance: '3000 ₽',
      features: ['Премиум доступ', 'Безлимитные генерации', 'Приоритетная поддержка'],
      recommended: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="heading-xl text-gradient mb-6">Market Mind</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Искусственный интеллект для эффективного маркетинга
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary">
              Начать бесплатно
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="btn-secondary">Узнать больше</button>
          </div>
        </motion.div>
      </section>

      {/* AI Tools Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Инструменты ��И</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="heading-md mb-3">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Преимущества</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Откройте новые возможности для вашего бизнеса с инновационными инструментами Market Mind
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="card overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 
                                 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
                                 bg-gradient-to-br ${benefit.gradient}`}>
                    {React.createElement(benefit.icon, { 
                      className: "w-8 h-8",
                      style: { color: benefit.iconColor }
                    })}
                  </div>
                  <h3 className="heading-md mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                  <div className="mt-6 flex items-center text-gray-500 group-hover:text-gray-700 transition-colors">
                    <span className="mr-2">Узнать больше</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-8">Посмотрите, как работает Market Mind</h2>
          <div className="aspect-video bg-gray-200 rounded-2xl">
            {/* Add video component here */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Видео презентация</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Тарифные планы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card ${plan.recommended ? 'ring-2 ring-black' : ''}`}
              >
                {plan.recommended && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-sm">
                    Рекомендуемый
                  </span>
                )}
                <h3 className="heading-md mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <DollarSign className="w-6 h-6 mr-1" />
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <p className="text-gray-600 mb-6">Баланс: {plan.balance}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${plan.recommended ? 'btn-primary' : 'btn-secondary'}`}>
                  Выбрать тариф
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Market Mind</h3>
            <p className="text-gray-400">
              Инновационные решения для маркетинга с использованием искусственного интеллекта
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-400">Телефон поддержки: 8 800 123-45-67</p>
            <p className="text-gray-400">Email: support@marketmind.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Юридическая информация</h3>
            <p className="text-gray-400">ИНН: 1234567890</p>
            <p className="text-gray-400">ОГРН: 1234567890123</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
