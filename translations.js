// Language translations for Emerald Shadows site
const translations = {
    ru: {
        // Navigation
        nav: {
            main: "Главная",
            concept: "Концепция",
            story: "Сюжет",
            bosses: "Боссы",
            mechanics: "Механики",
            style: "Стиль",
            locations: "Локации"
        },
        
        // Hero Section
        hero: {
            title: "ИЗУМРУДНЫЕ ТЕНИ",
            subtitle: "Мрачная деконструкция Волшебника страны Оз",
            description: "Элли возвращается в Страну Оз, но находит разрушенный Изумрудный город. Ее бывшие друзья стали тиранами, а волшебные дары оказались проклятиями.",
            genres: {
                platformer: "2D Платформер",
                puzzles: "Головоломки",
                horror: "Психологический хоррор",
                ageRating: "16+"
            }
        },
        
        // Concept Section
        concept: {
            title: "Концепция",
            genre: {
                title: "Жанр",
                description: "2D платформер-головоломка с элементами психологического хоррора"
            },
            style: {
                title: "Стиль",
                description: "Монохромная черно-белая графика с яркими цветовыми акцентами"
            },
            audience: {
                title: "Аудитория",
                description: "16+ (темная деконструкция детской сказки)"
            },
            mainIdea: {
                title: "Основная идея",
                description: "Прошло много лет после событий оригинальной сказки. Волшебник Гудвин создал тоталитарную систему, где дары друзей Элли оказались проклятиями. Изумрудный город охвачен восстанием и разрушениями."
            }
        },
        
        // Story Section
        story: {
            title: "Сюжет",
            events: {
                return: {
                    title: "Возвращение",
                    description: "Элли возвращается в Страну Оз и обнаруживает Изумрудный город в огне и руинах."
                },
                discovery: {
                    title: "Открытие",
                    description: "Волшебник Гудвин превратил город в тоталитарное государство, а друзья Элли стали его жестокими наместниками."
                },
                escape: {
                    title: "Побег",
                    description: "Элли должна сбежать из горящего города и пройти через владения каждого из своих бывших товарищей."
                },
                truth: {
                    title: "Истина",
                    description: "В финале Элли предстоит узнать правду о том, что произошло с ее друзьями и найти путь к искуплению."
                }
            }
        },
        
        // Bosses Section
        bosses: {
            title: "Боссы - Падшие друзья",
            scarecrow: {
                name: "Страшила",
                title: "Повелитель Ворон",
                location: "Заброшенные поля",
                corruption: "Получил не мудрость, а жестокий расчет и цинизм",
                abilities: [
                    "Призывает стаи ворон",
                    "Использует чучела как ловушки",
                    "Меняет локации в реальном времени"
                ],
                accent: "Красные глаза ворон"
            },
            tinman: {
                name: "Железный дровосек",
                title: "Король Машин",
                location: "Индустриальная зона",
                corruption: "Получил не сердце, а холодную жестокость",
                abilities: [
                    "Управляет механическими пилами",
                    "Создает лабиринты из механизмов",
                    "Использует пар и огонь"
                ],
                accent: "Оранжевые искры и пламя"
            },
            lion: {
                name: "Трусливый лев",
                title: "Зверь из Тени",
                location: "Мрачный лес",
                corruption: "Получил не смелость, а безрассудную агрессию",
                abilities: [
                    "Атакует из теней",
                    "Создает звуковые ловушки",
                    "Использует инстинкт страха"
                ],
                accent: "Золотые глаза в темноте"
            }
        },
        
        // Mechanics Section
        mechanics: {
            title: "Уникальные механики",
            redShoes: {
                name: "Красные туфельки",
                description: "Позволяют видеть скрытые платформы и проходы"
            },
            truthShards: {
                name: "Осколки правды",
                description: "Воспоминания, открывающие новые пути"
            },
            shadowsPast: {
                name: "Тени прошлого",
                description: "Призрачные помощники из добрых воспоминаний"
            }
        },
        
        // Visual Style Section
        visual: {
            title: "Визуальный стиль",
            base: {
                title: "Основа",
                description: "Черно-белая гамма с оттенками серого в стиле игры Limbo"
            },
            accents: {
                title: "Цветовые акценты",
                emerald: {
                    name: "Изумрудный",
                    description: "Магические элементы и важные объекты"
                },
                red: {
                    name: "Красный",
                    description: "Опасности и способности Элли"
                },
                gold: {
                    name: "Золотой",
                    description: "Воспоминания и важные предметы"
                },
                blue: {
                    name: "Синий",
                    description: "Элементы надежды"
                }
            }
        },
        
        // Locations Section
        locations: {
            title: "Локации",
            emeraldCity: {
                name: "Горящий Изумрудный город",
                description: "Пролог - обучение базовым механикам среди разрушений"
            },
            abandonedFields: {
                name: "Заброшенные поля",
                description: "Головоломки с воронами и динамически меняющиеся лабиринты"
            },
            industrialZone: {
                name: "Индустриальная зона",
                description: "Механические головоломки с опасными движущимися частями"
            },
            darkForest: {
                name: "Темный лес",
                description: "Стелс-механики и работа с тенями и светом"
            }
        }
    },
    
    en: {
        // Navigation
        nav: {
            main: "Main",
            concept: "Concept",
            story: "Story",
            bosses: "Bosses",
            mechanics: "Mechanics",
            style: "Style",
            locations: "Locations"
        },
        
        // Hero Section
        hero: {
            title: "EMERALD SHADOWS",
            subtitle: "A Dark Deconstruction of The Wizard of Oz",
            description: "Ellie returns to the Land of Oz, but finds the Emerald City in ruins. Her former friends have become tyrants, and their magical gifts have turned into curses.",
            genres: {
                platformer: "2D Platformer",
                puzzles: "Puzzles",
                horror: "Psychological Horror",
                ageRating: "16+"
            }
        },
        
        // Concept Section
        concept: {
            title: "Concept",
            genre: {
                title: "Genre",
                description: "2D platformer-puzzle with elements of psychological horror"
            },
            style: {
                title: "Style",
                description: "Monochrome black and white graphics with bright color accents"
            },
            audience: {
                title: "Audience",
                description: "16+ (dark deconstruction of a children's fairy tale)"
            },
            mainIdea: {
                title: "Main Idea",
                description: "Many years have passed since the events of the original fairy tale. The Wizard Goodwin has created a totalitarian system where Ellie's friends' gifts have become curses. The Emerald City is engulfed in rebellion and destruction."
            }
        },
        
        // Story Section
        story: {
            title: "Story",
            events: {
                return: {
                    title: "Return",
                    description: "Ellie returns to the Land of Oz and discovers the Emerald City in fire and ruins."
                },
                discovery: {
                    title: "Discovery",
                    description: "The Wizard Goodwin has turned the city into a totalitarian state, and Ellie's friends have become his cruel governors."
                },
                escape: {
                    title: "Escape",
                    description: "Ellie must escape from the burning city and pass through the domains of each of her former companions."
                },
                truth: {
                    title: "Truth",
                    description: "In the finale, Ellie will learn the truth about what happened to her friends and find a path to redemption."
                }
            }
        },
        
        // Bosses Section
        bosses: {
            title: "Bosses - Fallen Friends",
            scarecrow: {
                name: "Scarecrow",
                title: "Lord of Crows",
                location: "Abandoned Fields",
                corruption: "Received not wisdom, but cruel calculation and cynicism",
                abilities: [
                    "Summons crow flocks",
                    "Uses scarecrows as traps",
                    "Changes locations in real time"
                ],
                accent: "Red crow eyes"
            },
            tinman: {
                name: "Tin Man",
                title: "King of Machines",
                location: "Industrial Zone",
                corruption: "Received not a heart, but cold cruelty",
                abilities: [
                    "Controls mechanical saws",
                    "Creates labyrinths from mechanisms",
                    "Uses steam and fire"
                ],
                accent: "Orange sparks and flames"
            },
            lion: {
                name: "Cowardly Lion",
                title: "Beast from Shadow",
                location: "Dark Forest",
                corruption: "Received not courage, but reckless aggression",
                abilities: [
                    "Attacks from shadows",
                    "Creates sound traps",
                    "Uses fear instinct"
                ],
                accent: "Golden eyes in darkness"
            }
        },
        
        // Mechanics Section
        mechanics: {
            title: "Unique Mechanics",
            redShoes: {
                name: "Red Shoes",
                description: "Allow you to see hidden platforms and passages"
            },
            truthShards: {
                name: "Truth Shards",
                description: "Memories that open new paths"
            },
            shadowsPast: {
                name: "Shadows of the Past",
                description: "Ghostly helpers from good memories"
            }
        },
        
        // Visual Style Section
        visual: {
            title: "Visual Style",
            base: {
                title: "Base",
                description: "Black and white palette with gray shades in Limbo game style"
            },
            accents: {
                title: "Color Accents",
                emerald: {
                    name: "Emerald",
                    description: "Magical elements and important objects"
                },
                red: {
                    name: "Red",
                    description: "Dangers and Ellie's abilities"
                },
                gold: {
                    name: "Gold",
                    description: "Memories and important items"
                },
                blue: {
                    name: "Blue",
                    description: "Elements of hope"
                }
            }
        },
        
        // Locations Section
        locations: {
            title: "Locations",
            emeraldCity: {
                name: "Burning Emerald City",
                description: "Prologue - learning basic mechanics among destruction"
            },
            abandonedFields: {
                name: "Abandoned Fields",
                description: "Crow puzzles and dynamically changing labyrinths"
            },
            industrialZone: {
                name: "Industrial Zone",
                description: "Mechanical puzzles with dangerous moving parts"
            },
            darkForest: {
                name: "Dark Forest",
                description: "Stealth mechanics and working with shadows and light"
            }
        }
    }
};
