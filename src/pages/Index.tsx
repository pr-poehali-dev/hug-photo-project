import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const featuredArticles = [
    {
      id: 1,
      title: "Современные тренды в веб-разработке 2024",
      description: "Изучаем самые актуальные технологии и подходы в создании веб-приложений",
      image: "/img/87f9d79d-3fd2-4767-840c-1b1345b23bc9.jpg",
      category: "Технологии",
      readTime: "5 мин",
      date: "15 авг 2024"
    },
    {
      id: 2,
      title: "UX/UI дизайн: принципы и лучшие практики",
      description: "Как создавать интуитивно понятные интерфейсы, которые любят пользователи",
      image: "/img/24d13913-e9c6-4ac3-b3b4-169218ac2189.jpg",
      category: "Дизайн",
      readTime: "7 мин",
      date: "12 авг 2024"
    },
    {
      id: 3,
      title: "Оптимизация производительности React-приложений",
      description: "Техники и инструменты для ускорения работы фронтенд-приложений",
      image: "/img/d4c8166e-ae0d-42d0-ad28-0df9fbf0cc3d.jpg",
      category: "React",
      readTime: "10 мин", 
      date: "8 авг 2024"
    }
  ];

  const categories = ["Все", "Технологии", "Дизайн", "React", "JavaScript", "CSS"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-white to-skyblue/10">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200/50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-coral to-skyblue rounded-full"></div>
            <h1 className="text-2xl font-bold text-gray-900">ModernBlog</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-coral transition-colors">Главная</a>
            <a href="#" className="text-gray-600 hover:text-coral transition-colors">Статьи</a>
            <a href="#" className="text-gray-600 hover:text-coral transition-colors">Категории</a>
            <a href="#" className="text-gray-600 hover:text-coral transition-colors">О блоге</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button className="bg-coral hover:bg-coral/90">
              Подписаться
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-coral to-skyblue text-white px-4 py-2">
            ✨ Новые статьи каждую неделю
          </Badge>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Современный блог о
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-skyblue"> технологиях</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Изучайте последние тренды в веб-разработке, дизайне и технологиях. 
            Практические советы и глубокие разборы от экспертов индустрии.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-coral to-skyblue hover:opacity-90 text-white px-8 py-3">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Читать статьи
            </Button>
            <Button variant="outline" size="lg" className="border-coral text-coral hover:bg-coral hover:text-white px-8 py-3">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-coral hover:bg-coral/90" : "hover:border-coral hover:text-coral"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Популярные статьи</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые читаемые и обсуждаемые материалы нашего блога
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-coral text-white">
                    {article.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-coral transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-coral hover:text-white hover:bg-coral group-hover:bg-coral group-hover:text-white transition-all"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gradient-to-r from-coral/20 via-skyblue/20 to-mint/20">
        <div className="container mx-auto text-center max-w-2xl">
          <Icon name="Mail" size={48} className="mx-auto mb-6 text-coral" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Подпишитесь на рассылку</h3>
          <p className="text-gray-600 mb-8">
            Получайте уведомления о новых статьях и эксклюзивном контенте первыми
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-coral"
            />
            <Button className="bg-coral hover:bg-coral/90 px-8">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-coral to-skyblue rounded-full"></div>
                <h4 className="text-xl font-bold">ModernBlog</h4>
              </div>
              <p className="text-gray-400">
                Современный блог о технологиях, дизайне и разработке
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-coral transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Категории</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">О блоге</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Категории</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-coral transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">React</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">JavaScript</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-coral">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-coral">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-coral">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ModernBlog. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}