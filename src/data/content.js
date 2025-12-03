export const contentCategories = [
    {
        id: 'sports',
        name: { en: 'Sports in Egypt', ar: 'الرياضة في مصر' },
        description: {
            en: 'Discover the vibrant sports culture in Egypt, from football passion to world-class squash championships.',
            ar: 'اكتشف ثقافة الرياضة النابضة بالحياة في مصر، من شغف كرة القدم إلى بطولات الاسكواش العالمية.'
        },
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80',
        icon: '⚽'
    },
    {
        id: 'history',
        name: { en: 'Egyptian History', ar: 'التاريخ المصري' },
        description: {
            en: 'Journey through millennia of Egyptian civilization and discover the stories of pharaohs and ancient wonders.',
            ar: 'رحلة عبر آلاف السنين من الحضارة المصرية واكتشف قصص الفراعنة والعجائب القديمة.'
        },
        image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&q=80',
        icon: '🏛️'
    },
    {
        id: 'culture',
        name: { en: 'Egyptian Culture', ar: 'الثقافة المصرية' },
        description: {
            en: 'Experience the rich traditions, music, art, and cuisine that make Egypt unique.',
            ar: 'اختبر التقاليد الغنية والموسيقى والفن والمطبخ التي تجعل مصر فريدة من نوعها.'
        },
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&q=80',
        icon: '🎭'
    }
];

export const sportsContent = [
    {
        id: 'football',
        name: { en: 'Football', ar: 'كرة القدم' },
        category: 'sports',
        shortDescription: {
            en: 'The most popular sport in Egypt, with passionate fans and legendary clubs like Al Ahly and Zamalek.',
            ar: 'الرياضة الأكثر شعبية في مصر، مع جماهير متحمسة وأندية أسطورية مثل الأهلي والزمالك.'
        },
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80',
        detailedDescription: {
            en: `Football is not just a sport in Egypt; it's a way of life. With a passionate fan base and a rich history, Egyptian football has produced legendary players and unforgettable moments.

The Cairo Derby between Al Ahly and Zamalek is one of the most intense rivalries in world football. These matches bring the entire nation to a standstill, with millions watching and celebrating their team's colors.

Egypt's national team, known as the Pharaohs, has won a record 7 African Cup of Nations titles, showcasing the country's dominance in African football.`,
            ar: `كرة القدم ليست مجرد رياضة في مصر؛ إنها أسلوب حياة. مع قاعدة جماهيرية متحمسة وتاريخ غني، أنتجت كرة القدم المصرية لاعبين أسطوريين ولحظات لا تُنسى.

ديربي القاهرة بين الأهلي والزمالك هو واحد من أشد المنافسات في كرة القدم العالمية. هذه المباريات توقف الأمة بأكملها، مع ملايين المشاهدين الذين يحتفلون بألوان فريقهم.

فاز المنتخب الوطني المصري، المعروف باسم الفراعنة، بسبعة ألقاب قياسية في كأس الأمم الأفريقية، مما يُظهر هيمنة البلاد على كرة القدم الأفريقية.`
        },
        famousPlayers: [
            { name: 'Mohamed Salah', achievement: 'Liverpool FC Star & Egyptian King', ar: 'نجم ليفربول والملك المصري' },
            { name: 'Mohamed Aboutrika', achievement: 'Al Ahly Legend & African Icon', ar: 'أسطورة الأهلي وأيقونة أفريقية' },
            { name: 'Hossam Hassan', achievement: 'Egypt\'s All-Time Top Scorer', ar: 'الهداف التاريخي لمصر' }
        ],
        venues: [
            {
                name: { en: 'Cairo International Stadium', ar: 'ستاد القاهرة الدولي' },
                capacity: '75,000',
                location: { lat: 30.0691, lng: 31.3123 },
                description: { en: 'The largest stadium in Egypt and Africa', ar: 'أكبر ملعب في مصر وأفريقيا' }
            },
            {
                name: { en: 'Borg El Arab Stadium', ar: 'ستاد برج العرب' },
                capacity: '86,000',
                location: { lat: 30.9990, lng: 29.5650 },
                description: { en: 'Home of the Egyptian national team', ar: 'موطن المنتخب الوطني المصري' }
            }
        ],
        achievements: [
            { year: '1957-2010', title: '7x African Cup of Nations Winners' },
            { year: '2006, 2008, 2012', title: 'African Cup of Nations Three-peat' }
        ]
    },
    {
        id: 'basketball',
        name: { en: 'Basketball', ar: 'كرة السلة' },
        category: 'sports',
        shortDescription: {
            en: 'A growing sport in Egypt with increasing popularity among youth and competitive national teams.',
            ar: 'رياضة متنامية في مصر مع شعبية متزايدة بين الشباب ومنتخبات وطنية تنافسية.'
        },
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80',
        detailedDescription: {
            en: `Basketball has witnessed tremendous growth in Egypt over the past decades. The Egyptian Basketball Super League features competitive teams and attracts thousands of fans to indoor arenas across the country.

The national team has been a force in African basketball, consistently competing for continental championships. Egyptian basketball players are known for their technical skills and team play.

Modern facilities and youth programs have contributed to developing new talent, with many young Egyptians pursuing basketball professionally both locally and internationally.`,
            ar: `شهدت كرة السلة نموًا هائلاً في مصر خلال العقود الماضية. تضم الدوري المصري لكرة السلة فرقًا تنافسية وتجذب آلاف المشجعين إلى الصالات المغلقة في جميع أنحاء البلاد.

كان المنتخب الوطني قوة في كرة السلة الأفريقية، يتنافس باستمرار على البطولات القارية. يُعرف لاعبو كرة السلة المصريون بمهاراتهم الفنية واللعب الجماعي.

ساهمت المرافق الحديثة وبرامج الشباب في تطوير مواهب جديدة، مع العديد من الشباب المصريين الذين يسعون لمزاولة كرة السلة بشكل احترافي محليًا ودوليًا.`
        },
        famousPlayers: [
            { name: 'Ramy Gunady', achievement: 'Egyptian Basketball Pioneer', ar: 'رائد كرة السلة المصرية' },
            { name: 'Assem Marei', achievement: 'National Team Captain', ar: 'قائد المنتخب الوطني' },
            { name: 'Ehab Amin', achievement: 'Professional Player in Europe', ar: 'لاعب محترف في أوروبا' }
        ],
        venues: [
            {
                name: { en: 'Cairo Stadium Indoor Halls Complex', ar: 'مجمع الصالات المغطاة بستاد القاهرة' },
                capacity: '20,000',
                location: { lat: 30.0680, lng: 31.3130 },
                description: { en: 'Premier basketball venue in Egypt', ar: 'مكان كرة السلة الرئيسي في مصر' }
            },
            {
                name: { en: 'Alexandria Stadium Hall', ar: 'صالة ستاد الإسكندرية' },
                capacity: '5,000',
                location: { lat: 31.2001, lng: 29.9187 },
                description: { en: 'Modern basketball facility', ar: 'منشأة حديثة لكرة السلة' }
            }
        ],
        achievements: [
            { year: '2009', title: 'AfroBasket Bronze Medal' },
            { year: '1983', title: 'African Champions' }
        ]
    },
    {
        id: 'squash',
        name: { en: 'Squash', ar: 'الاسكواش' },
        category: 'sports',
        shortDescription: {
            en: 'Egypt dominates world squash with multiple world champions and top-ranked players.',
            ar: 'تهيمن مصر على رياضة الاسكواش العالمية مع العديد من الأبطال واللاعبين المصنفين الأوائل.'
        },
        image: 'https://images.unsplash.com/photo-1554068865-2484cd0088fa?auto=format&fit=crop&q=80',
        detailedDescription: {
            en: `Egyptian squash has achieved unprecedented global success, producing world champions and dominating international rankings. Egypt is the undisputed powerhouse of world squash.

From the Great Pyramid to El Gouna, Egypt hosts some of the most iconic squash tournaments in the world. These events attract global attention and showcase Egypt's magnificent historical sites.

Egyptian players are known for their exceptional technique, fitness, and mental strength. The country's squash academies are considered among the best in the world, producing generation after generation of champions.`,
            ar: `حققت رياضة الاسكواش المصرية نجاحًا عالميًا غير مسبوق، منتجة أبطالًا عالميين ومهيمنة على التصنيفات الدولية. مصر هي القوة المطلقة في الاسكواش العالمي.

من الهرم الأكبر إلى الجونة، تستضيف مصر بعض أشهر بطولات الاسكواش في العالم. تجذب هذه الأحداث اهتمامًا عالميًا وتعرض المواقع التاريخية الرائعة لمصر.

يُعرف اللاعبون المصريون بتقنيتهم الاستثنائية واللياقة البدنية والقوة العقلية. تعتبر أكاديميات الاسكواش في البلاد من بين الأفضل في العالم، تنتج جيلاً بعد جيل من الأبطال.`
        },
        famousPlayers: [
            { name: 'Ali Farag', achievement: 'World #1 & Multiple World Champion', ar: 'المصنف الأول عالميًا وبطل عالمي متعدد' },
            { name: 'Nour El Sherbini', achievement: 'Youngest World Champion Ever', ar: 'أصغر بطلة عالمية على الإطلاق' },
            { name: 'Mohamed El Shorbagy', achievement: 'Former World #1', ar: 'المصنف الأول سابقًا' },
            { name: 'Raneem El Welily', achievement: 'Former World #1', ar: 'المصنفة الأولى سابقًا' }
        ],
        venues: [
            {
                name: { en: 'Great Pyramid Glass Court', ar: 'الملعب الزجاجي عند الهرم الأكبر' },
                capacity: '5,000',
                location: { lat: 29.9792, lng: 31.1342 },
                description: { en: 'Iconic tournament venue at the Pyramids', ar: 'مكان البطولة الشهير عند الأهرامات' }
            },
            {
                name: { en: 'El Gouna Squash Complex', ar: 'مجمع الجونة للاسكواش' },
                capacity: '3,000',
                location: { lat: 27.3949, lng: 33.6782 },
                description: { en: 'World-class squash facility', ar: 'منشأة اسكواش عالمية' }
            }
        ],
        achievements: [
            { year: '2024', title: 'Multiple players in World Top 10' },
            { year: '2017-Present', title: 'Dominant force in world squash' }
        ]
    },
    {
        id: 'handball',
        name: { en: 'Handball', ar: 'كرة اليد' },
        category: 'sports',
        shortDescription: {
            en: 'Egypt\'s handball team is one of the strongest in Africa and the world, with multiple continental titles.',
            ar: 'منتخب مصر لكرة اليد هو واحد من أقوى المنتخبات في أفريقيا والعالم، مع ألقاب قارية متعددة.'
        },
        image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80',
        detailedDescription: {
            en: `Egyptian handball has risen to become one of the premier forces in world handball. The national team competes at the highest level in Olympic Games and World Championships.

Egypt has hosted major international handball tournaments, showcasing the country's excellent sports infrastructure and passionate fans. The atmosphere during handball matches is electric, with crowds creating an intimidating environment for visiting teams.

The Egyptian handball league has produced talented players who compete professionally in top European leagues, bringing international experience back to strengthen the national team.`,
            ar: `ارتقت كرة اليد المصرية لتصبح واحدة من القوى الرائدة في كرة اليد العالمية. يتنافس المنتخب الوطني على أعلى مستوى في الألعاب الأولمبية وبطولات العالم.

استضافت مصر بطولات كرة يد دولية كبرى، مما يعرض البنية التحتية الرياضية الممتازة للبلاد والجماهير المتحمسة. الأجواء خلال مباريات كرة اليد كهربائية، مع حشود تخلق بيئة مخيفة للفرق الزائرة.

أنتج الدوري المصري لكرة اليد لاعبين موهوبين يتنافسون بشكل احترافي في أفضل الدوريات الأوروبية، مما يعيد خبرة دولية لتعزيز المنتخب الوطني.`
        },
        famousPlayers: [
            { name: 'Ahmed El Ahmar', achievement: 'Egyptian Handball Legend', ar: 'أسطورة كرة اليد المصرية' },
            { name: 'Karim Hendawy', achievement: 'Outstanding Goalkeeper', ar: 'حارس مرمى متميز' },
            { name: 'Yehia Elderaa', achievement: 'Star Player', ar: 'لاعب نجم' }
        ],
        venues: [
            {
                name: { en: 'Cairo Stadium Indoor Halls', ar: 'مجمع الصالات المغطاة' },
                capacity: '20,000',
                location: { lat: 30.0680, lng: 31.3130 },
                description: { en: 'Main handball venue', ar: 'المكان الرئيسي لكرة اليد' }
            }
        ],
        achievements: [
            { year: '2024', title: '8th place at Olympics' },
            { year: '2021', title: 'African Champions' },
            { year: '2016', title: 'African Champions' }
        ]
    }
];
