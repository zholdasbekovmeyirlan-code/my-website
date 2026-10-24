/* FluentPath — extra content: reading texts, dialogue stories and UNT-style multi-answer questions.
   Extends window.FP_DATA (loaded after course-data.js). */
(() => {
  const D = window.FP_DATA;
  if (!D) return;

  const q = (question, options, a) => ({ q: question, options, a });

  /* ---------- Reading texts (A1 → B2) ---------- */
  const READINGS = [
    {
      id: "r4",
      title: "My Family",
      level: "A1",
      text: `My name is Dana. I am twelve years old. I live in Shymkent with my family. My father is a driver and my mother is a nurse. I have one brother. His name is Arman. He is eight.

We have a small cat. Her name is Mysh. Every evening we drink tea together and talk about our day. I love my family.`,
      questions: [
        q("Where does Dana live?", ["In Almaty", "In Shymkent", "In Astana", "In Taraz"], 1),
        q("What is her mother's job?", ["A teacher", "A driver", "A nurse", "A doctor"], 2),
        q("How old is Arman?", ["Six", "Eight", "Ten", "Twelve"], 1),
        q("What does the family do every evening?", ["Watch TV", "Drink tea and talk", "Play football", "Go to the park"], 1),
      ],
    },
    {
      id: "r5",
      title: "A Day at School",
      level: "A1",
      text: `Aibek goes to school at eight o'clock. His first lesson is Maths. He likes Maths, but his favourite subject is English. His English teacher is Ms Saule. She is very kind.

At twelve o'clock Aibek has lunch with his friends. They eat soup and bread. After school, he plays football in the park. He does his homework in the evening.`,
      questions: [
        q("When does Aibek go to school?", ["At seven", "At eight", "At nine", "At twelve"], 1),
        q("What is his favourite subject?", ["Maths", "Music", "English", "Art"], 2),
        q("What do they eat for lunch?", ["Soup and bread", "Rice and meat", "Pizza", "Apples"], 0),
        q("When does he do his homework?", ["In the morning", "At lunch", "In the evening", "At school"], 2),
      ],
    },
    {
      id: "r6",
      title: "A Weekend in the Mountains",
      level: "A2",
      text: `Last weekend, Madina and her friends went to Shymbulak, a ski resort near Almaty. They took a bus early in the morning because the roads are busy on Saturdays. The weather was cold but sunny.

Madina could not ski well, so she took a lesson with an instructor. At first she fell many times, but after two hours she felt more confident. Her friends were already good skiers, and they went to the top of the mountain.

In the afternoon, they had hot tea and baursak in a small café. Madina was tired but happy. She wants to go again next month.`,
      questions: [
        q("Where did they go?", ["Medeu stadium", "Shymbulak", "Lake Kaindy", "Charyn Canyon"], 1),
        q("Why did they leave early?", ["It was hot", "The roads are busy on Saturdays", "The resort closes early", "To see the sunrise"], 1),
        q("What did Madina do first?", ["Went to the top", "Took a lesson", "Drank tea", "Went home"], 1),
        q("How did she feel at the end of the day?", ["Angry", "Bored", "Tired but happy", "Afraid"], 2),
      ],
    },
    {
      id: "r7",
      title: "Shopping at the Green Bazaar",
      level: "A2",
      text: `The Green Bazaar is one of the most famous markets in Almaty. People come here to buy fresh fruit, vegetables, meat, cheese and dried fruit. Many tourists also visit the bazaar because it is colourful and lively.

Prices are not always written, so customers often ask, "How much is this?" Sellers are friendly, and sometimes they let you try the food before you buy it. If you buy a lot, you can ask for a discount.

The bazaar is open every day except Monday. It is busiest at the weekend, so it is better to go early in the morning.`,
      questions: [
        q("What can you buy at the bazaar?", ["Only clothes", "Fresh food and dried fruit", "Cars", "Books"], 1),
        q("What do sellers sometimes let you do?", ["Take food for free", "Try the food before buying", "Cook in the market", "Pay next week"], 1),
        q("When is the bazaar closed?", ["On Sunday", "On Saturday", "On Monday", "On Friday"], 2),
        q("When is it busiest?", ["On weekdays", "At the weekend", "At night", "On Monday"], 1),
      ],
    },
    {
      id: "r8",
      title: "A Message from a New Neighbour",
      level: "A2",
      text: `Hi! My name is Tom and I moved into flat 14 last week. I am from Manchester, and I am working as an English teacher in Astana for one year.

I don't know the city well yet. Could you tell me where I can buy a SIM card and a good winter coat? People say the winter here is very cold, and my British coat is too thin!

Also, I would like to learn some Kazakh. Maybe we can meet for coffee: I can help you with English and you can teach me Kazakh words. I am free on Saturday afternoon.

Best wishes, Tom`,
      questions: [
        q("Why is Tom in Astana?", ["He is studying", "He is working as a teacher", "He is on holiday", "He is visiting family"], 1),
        q("What does he need?", ["A car", "A SIM card and a winter coat", "A new flat", "A bicycle"], 1),
        q("What does he suggest?", ["A language exchange over coffee", "A football match", "A party", "A trip to London"], 0),
        q("When is he free?", ["On Monday morning", "On Friday night", "On Saturday afternoon", "Every day"], 2),
      ],
    },
    {
      id: "r9",
      title: "Why People Learn Languages Online",
      level: "B1",
      text: `Ten years ago, most people learned foreign languages in classrooms. Today, millions of learners use apps and websites instead. One reason is flexibility: students can practise on the bus, during a lunch break or late at night.

Another reason is cost. Private lessons can be expensive, while many apps are free or cheap. Online platforms also give instant feedback, so learners can see their mistakes immediately.

However, online learning has some disadvantages. It is easy to lose motivation without a teacher or classmates. Some learners spend a lot of time on vocabulary games but rarely practise speaking. Experts suggest combining apps with real conversations, for example with a tutor or a language partner.`,
      questions: [
        q("According to the text, what is one reason people learn online?", ["It is always fun", "Flexibility", "Teachers prefer it", "All exams are online"], 1),
        q("What do online platforms give learners?", ["Certificates", "Instant feedback", "Free trips", "Printed books"], 1),
        q("What is one disadvantage of learning online?", ["It is expensive", "Losing motivation", "Too much speaking", "No vocabulary practice"], 1),
        q("What do experts suggest?", ["Stop using apps", "Only study grammar", "Combine apps with real conversations", "Study only at night"], 2),
        q("The word “rarely” in paragraph 3 means…", ["often", "almost never", "quickly", "always"], 1),
      ],
    },
    {
      id: "r10",
      title: "The Aral Sea",
      level: "B1",
      text: `The Aral Sea, on the border between Kazakhstan and Uzbekistan, was once the fourth-largest lake in the world. In the 1960s, the rivers that fed the sea were used to water cotton fields. As a result, the sea began to shrink quickly.

By the 2000s, it had lost most of its water. Fishing towns such as Aralsk were left far from the shore, and many people lost their jobs. Dust storms carried salt from the dry seabed and caused health problems.

In 2005, Kazakhstan built the Kokaral Dam to save the northern part, called the Small Aral. The water level rose, and fish returned. Although the southern part is still mostly desert, the project shows that environmental damage can sometimes be reversed.`,
      questions: [
        q("Why did the Aral Sea shrink?", ["There was too much rain", "Its rivers were used for cotton fields", "There was an earthquake", "Tourists used the water"], 1),
        q("What happened to Aralsk?", ["It became a capital city", "It was left far from the shore", "It moved to Uzbekistan", "It got a new airport"], 1),
        q("What did the Kokaral Dam do?", ["It saved the Small Aral", "It dried the northern part", "It created cotton fields", "It stopped fishing"], 0),
        q("What is the main idea of the last paragraph?", ["The whole sea is full again", "Environmental damage can sometimes be reversed", "Dams are always bad", "Fish never come back"], 1),
      ],
    },
    {
      id: "r11",
      title: "Working from Home",
      level: "B1",
      text: `Since 2020, many companies have allowed employees to work from home. Supporters say remote work saves time and money because people do not need to travel to the office. Parents can also spend more time with their children.

On the other hand, some workers feel lonely and find it difficult to separate work from free time. Managers sometimes worry that communication is slower when the team is not in one place.

As a result, many organisations now use a hybrid model: employees work from home two or three days a week and come to the office for meetings and teamwork. Surveys suggest that most workers prefer this balance.`,
      questions: [
        q("What is one advantage of remote work?", ["More traffic", "It saves time and money", "More meetings", "Bigger offices"], 1),
        q("What problem do some workers have?", ["They feel lonely", "They earn less", "They cannot use computers", "They travel more"], 0),
        q("What is a hybrid model?", ["Working only at home", "Working only in the office", "A mix of home and office work", "Working at night"], 2),
        q("What do most workers prefer?", ["The hybrid balance", "Five days in the office", "No work at all", "Only remote work"], 0),
      ],
    },
    {
      id: "r12",
      title: "The Science of Memory",
      level: "B2",
      text: `Why do we forget most of what we learn? In the 1880s, the German psychologist Hermann Ebbinghaus tested his own memory by learning lists of nonsense syllables. He discovered that people forget new information very quickly: much of it disappears within a day unless it is reviewed. This pattern is known as the forgetting curve.

Ebbinghaus also found that each review makes a memory last longer. If you revise a word after one day, then after three days, then after a week, the time before you forget it grows each time. This idea, called spaced repetition, is now used in many learning apps.

Researchers have since added another finding: actively recalling information is more effective than simply rereading it. Testing yourself, even when you make mistakes, strengthens the memory more than looking at the answer. Therefore, the most efficient learners combine spaced reviews with active recall.`,
      questions: [
        q("What did Ebbinghaus study?", ["Languages", "His own memory", "Animals", "Sleep"], 1),
        q("What is the forgetting curve?", ["How quickly we forget without review", "A graph in maths lessons", "A way to learn faster", "A memory illness"], 0),
        q("What happens after each review?", ["The memory lasts longer", "We forget faster", "Nothing changes", "We need more sleep"], 0),
        q("According to the text, what works better than rereading?", ["Highlighting", "Active recall", "Listening to music", "Copying the text"], 1),
        q("The word “efficient” is closest in meaning to…", ["slow", "productive", "expensive", "careful"], 1),
      ],
    },
    {
      id: "r13",
      title: "Urban Green Spaces",
      level: "B2",
      text: `As cities grow, parks and green areas are often replaced by roads and buildings. Yet a growing body of research suggests that green spaces are not a luxury but a necessity. Trees lower air temperature in summer, absorb pollution and reduce flooding by soaking up rainwater.

The benefits are also social and psychological. Studies in several countries have found that people who live near parks report lower stress levels and exercise more often. Green spaces provide free places where neighbours meet, which can strengthen communities.

Critics argue that land in city centres is too valuable to leave undeveloped. However, some cities have found creative solutions, such as rooftop gardens, green walls and turning old railway lines into parks. Planners in Almaty and Astana are also discussing how to expand tree cover while the cities continue to grow.`,
      questions: [
        q("What do trees do in summer?", ["Raise the temperature", "Lower the air temperature", "Cause floods", "Increase pollution"], 1),
        q("Which social benefit is mentioned?", ["Higher salaries", "Neighbours meet each other", "Faster traffic", "More shops"], 1),
        q("What do critics argue?", ["Parks are dangerous", "City-centre land is too valuable", "Trees are too expensive", "People do not like parks"], 1),
        q("Which creative solution is mentioned?", ["Banning cars", "Rooftop gardens", "Moving the city", "Building malls"], 1),
        q("The writer believes green spaces are…", ["a luxury", "a necessity", "unimportant", "only for tourists"], 1),
      ],
    },
    {
      id: "r14",
      title: "The Gig Economy",
      level: "B2",
      text: `The term "gig economy" describes work that is based on short-term tasks rather than permanent jobs. Delivery couriers, taxi drivers using mobile apps and freelance designers are typical examples. For many people, gig work offers freedom: they can choose when and how much to work.

However, this flexibility comes at a price. Gig workers usually do not receive sick pay, paid holidays or pensions, and their income can change dramatically from week to week. Because algorithms often decide who gets the next order, workers may feel they have little control.

Governments are now debating how to protect gig workers without destroying the flexibility that attracts them. Some countries have introduced minimum pay rules for platform work, while others require companies to contribute to social insurance.`,
      questions: [
        q("What is the gig economy based on?", ["Permanent jobs", "Short-term tasks", "Government work", "Factory jobs"], 1),
        q("What do gig workers usually NOT receive?", ["Orders", "Sick pay and pensions", "Apps", "Freedom"], 1),
        q("Who often decides who gets the next order?", ["The worker", "Only customers", "Algorithms", "The government"], 2),
        q("What are governments trying to do?", ["Ban gig work", "Protect workers without losing flexibility", "Only raise taxes", "Close the apps"], 1),
        q("“Comes at a price” means…", ["is free", "has disadvantages", "is expensive to buy", "is very popular"], 1),
      ],
    },
    {
      id: "r15",
      title: "Should Homework Be Banned?",
      level: "B2",
      text: `Homework has been part of school life for generations, but some educators now question its value. In Finland, which regularly performs well in international tests, students receive relatively little homework. This has led some to argue that more homework does not automatically mean better results.

Research presents a mixed picture. For older students, moderate amounts of homework are linked to higher achievement, especially when tasks are meaningful and teachers give feedback. For young children, however, the benefits are small, and too much homework can increase stress and reduce time for play, sleep and family.

Rather than banning homework, many experts recommend changing it: fewer repetitive worksheets and more reading, projects and practice that students can do independently. The key question is not how much homework is given, but whether it helps students learn.`,
      questions: [
        q("Why is Finland mentioned?", ["It gives a lot of homework", "It does well with little homework", "It banned schools", "It has long holidays"], 1),
        q("For whom is moderate homework linked to higher achievement?", ["Young children", "Older students", "Teachers", "Parents"], 1),
        q("What can too much homework do to young children?", ["Improve their sleep", "Increase stress", "Make them taller", "Nothing"], 1),
        q("What do many experts recommend?", ["Banning all homework", "Changing the type of homework", "Giving more worksheets", "Longer school days"], 1),
        q("According to the writer, the key question is…", ["how much homework is given", "whether homework helps students learn", "who checks homework", "when homework is given"], 1),
      ],
    },
  ];
  const haveR = new Set(D.readings.map((r) => r.id));
  READINGS.forEach((r) => !haveR.has(r.id) && D.readings.push(r));
  const RANK = { A1: 1, A2: 2, "A2–B1": 2.5, B1: 3, "B1–B2": 3.5, B2: 4 };
  D.readings.sort((a, b) => (RANK[a.level] || 9) - (RANK[b.level] || 9));

  /* ---------- Stories: short dialogues with checkpoints ----------
     line: [speaker, english, kazakh] · check: { after: lineIndex, q, options, a } */
  const STORIES = [
    {
      id: "st1",
      level: "A1",
      icon: "🏠",
      title: "Hello, Neighbour!",
      cast: { Aruzhan: "👧", Daniyar: "👦" },
      lines: [
        ["", "Aruzhan opens the door. A boy is standing there.", "Аружан есікті ашады. Есік алдында бір бала тұр."],
        ["Daniyar", "Hello! I'm Daniyar. I live in flat 12.", "Сәлем! Мен Даниярмын. 12-пәтерде тұрамын."],
        ["Aruzhan", "Hi, Daniyar! Nice to meet you. I'm Aruzhan.", "Сәлем, Данияр! Танысқаныма қуаныштымын. Мен Аружанмын."],
        ["Daniyar", "Is this your cat?", "Бұл сенің мысығың ба?"],
        ["Aruzhan", "Yes, her name is Mysh. She is very friendly.", "Иә, оның аты Мыш. Ол өте мейірімді."],
        ["Daniyar", "She is beautiful! I have a dog. His name is Bars.", "Ол әдемі екен! Менің итім бар. Оның аты — Барс."],
        ["Aruzhan", "Do you want some tea?", "Шай ішесің бе?"],
        ["Daniyar", "Yes, please! Thank you.", "Иә, рақмет!"],
      ],
      checks: [
        { after: 2, q: "Where does Daniyar live?", options: ["In flat 12", "In flat 2", "In a big house", "At school"], a: 0 },
        { after: 5, q: "What pet does Daniyar have?", options: ["A cat", "A dog", "A horse", "A bird"], a: 1 },
        { after: 7, q: "What does Aruzhan offer?", options: ["Coffee", "Tea", "Water", "Juice"], a: 1 },
      ],
    },
    {
      id: "st2",
      level: "A1",
      icon: "☕",
      title: "At the Café",
      cast: { Arman: "🧑", Waiter: "🧑‍🍳" },
      lines: [
        ["", "Arman is hungry. He goes into a small café.", "Арманның қарны ашты. Ол шағын кафеге кіреді."],
        ["Waiter", "Good afternoon! What would you like?", "Қайырлы күн! Не қалайсыз?"],
        ["Arman", "Can I have a cheese sandwich and a cup of tea, please?", "Ірімшік қосылған сэндвич пен бір кесе шай беріңізші."],
        ["Waiter", "Sure. Black tea or green tea?", "Әрине. Қара шай ма, көк шай ма?"],
        ["Arman", "Black tea with milk, please.", "Сүт қосылған қара шай, өтінемін."],
        ["Waiter", "Here you are. That's 1,800 tenge.", "Мінеки. 1800 теңге болады."],
        ["Arman", "Can I pay by card?", "Картамен төлеуге бола ма?"],
        ["Waiter", "Of course. Enjoy your meal!", "Әрине. Ас болсын!"],
      ],
      checks: [
        { after: 2, q: "What does Arman order to eat?", options: ["Soup", "A cheese sandwich", "Plov", "A cake"], a: 1 },
        { after: 5, q: "How much does it cost?", options: ["800 tenge", "1,800 tenge", "18,000 tenge", "180 tenge"], a: 1 },
        { after: 7, q: "How does Arman pay?", options: ["In cash", "By card", "By phone", "He doesn't pay"], a: 1 },
      ],
    },
    {
      id: "st3",
      level: "A2",
      icon: "🗺️",
      title: "Lost in Astana",
      cast: { Madina: "👩", Man: "👨" },
      lines: [
        ["", "Madina is in Astana for the first time. She can't find her hotel.", "Мадина Астанада алғаш рет жүр. Ол қонақүйін таба алмай тұр."],
        ["Madina", "Excuse me, can you help me? I'm looking for the Saryarka Hotel.", "Кешіріңіз, көмектесе аласыз ба? Мен «Сарыарқа» қонақүйін іздеп жүрмін."],
        ["Man", "Of course. Go straight down this street and turn left at the bank.", "Әрине. Осы көшемен тура жүріп, банктің жанынан солға бұрылыңыз."],
        ["Madina", "Is it far from here?", "Мұнан алыс па?"],
        ["Man", "No, it's about ten minutes on foot. Or you can take bus number 10.", "Жоқ, жаяу он минуттай. Немесе 10-автобусқа отыруға болады."],
        ["Madina", "I think I'll walk. The weather is nice today.", "Жаяу барайын деймін. Бүгін ауа райы жақсы."],
        ["Man", "Good idea. The hotel is next to a big shopping centre. You can't miss it.", "Дұрыс шешім. Қонақүй үлкен сауда орталығының жанында. Байқамай қалмайсыз."],
        ["Madina", "Thank you so much!", "Көп рақмет!"],
        ["Man", "You're welcome. Enjoy Astana!", "Оқасы жоқ. Астанада жақсы демалыңыз!"],
      ],
      checks: [
        { after: 2, q: "Where should Madina turn left?", options: ["At the park", "At the bank", "At the school", "At the bridge"], a: 1 },
        { after: 4, q: "How long does it take on foot?", options: ["Two minutes", "About ten minutes", "One hour", "Half an hour"], a: 1 },
        { after: 8, q: "What is next to the hotel?", options: ["A hospital", "A shopping centre", "A river", "A museum"], a: 1 },
      ],
    },
    {
      id: "st4",
      level: "A2",
      icon: "🎁",
      title: "The Birthday Present",
      cast: { Alibek: "👦", Aigerim: "👧" },
      lines: [
        ["", "It's Saturday. Tomorrow is Mum's birthday, and Alibek has no present yet.", "Бүгін сенбі. Ертең анасының туған күні, ал Әлібекте әлі сыйлық жоқ."],
        ["Alibek", "Aigerim, what should we buy for Mum?", "Әйгерім, анамызға не сатып алсақ екен?"],
        ["Aigerim", "She loves flowers, but flowers are boring. What about a book?", "Ол гүлді жақсы көреді, бірақ гүл қызық емес. Кітап қалай?"],
        ["Alibek", "She has too many books! Last year we gave her a scarf.", "Оның кітабы өте көп! Былтыр біз оған орамал сыйладық."],
        ["Aigerim", "I know! Let's cook dinner for her. She always cooks for us.", "Таптым! Оған кешкі ас дайындайық. Ол бізге үнемі тамақ пісіреді ғой."],
        ["Alibek", "Great idea! But I can't cook…", "Керемет ой! Бірақ мен тамақ пісіре алмаймын…"],
        ["Aigerim", "Don't worry. I'll make beshbarmak, and you can make a cake. We can watch a video.", "Уайымдама. Мен бешбармақ жасаймын, ал сен торт пісір. Бейнероликті көріп жасаймыз."],
        ["Alibek", "Deal! Let's go to the market and buy everything we need.", "Келістік! Базарға барып, керектің бәрін алайық."],
      ],
      checks: [
        { after: 1, q: "Whose birthday is it tomorrow?", options: ["Alibek's", "Aigerim's", "Mum's", "Dad's"], a: 2 },
        { after: 4, q: "What present do they choose?", options: ["A book", "A scarf", "Cooking dinner", "Flowers"], a: 2 },
        { after: 7, q: "What will Alibek make?", options: ["Beshbarmak", "A cake", "Tea", "A salad"], a: 1 },
      ],
    },
    {
      id: "st5",
      level: "B1",
      icon: "💼",
      title: "The Job Interview",
      cast: { Dana: "👩‍💼", Manager: "🧑‍💼" },
      lines: [
        ["", "Dana has a job interview at a travel company in Almaty.", "Дананың Алматыдағы туристік компанияда жұмыс сұхбаты бар."],
        ["Manager", "Good morning, Dana. Please have a seat. Why do you want to work with us?", "Қайырлы таң, Дана. Отырыңыз. Неге бізде жұмыс істегіңіз келеді?"],
        ["Dana", "I love travelling, and I speak three languages: Kazakh, Russian and English. I think I could help your international clients.", "Мен саяхаттағанды жақсы көремін және үш тілде сөйлеймін: қазақша, орысша, ағылшынша. Халықаралық клиенттеріңізге көмектесе аламын деп ойлаймын."],
        ["Manager", "That's impressive. Do you have any experience in tourism?", "Әсерлі екен. Туризм саласында тәжірибеңіз бар ма?"],
        ["Dana", "Last summer I worked as a volunteer guide at the Charyn Canyon. I showed tourists around and answered their questions.", "Өткен жазда Шарын шатқалында ерікті гид болып жұмыс істедім. Туристерге жерді көрсетіп, сұрақтарына жауап бердім."],
        ["Manager", "What would you say is your biggest weakness?", "Ең үлкен әлсіз жағыңыз қандай деп ойлайсыз?"],
        ["Dana", "Sometimes I spend too much time on details. But I'm learning to manage my time better by making a plan every morning.", "Кейде ұсақ-түйекке тым көп уақыт жұмсаймын. Бірақ күнде таңертең жоспар құрып, уақытымды жақсырақ басқаруды үйреніп жүрмін."],
        ["Manager", "Good answer. We'll call you by Friday.", "Жақсы жауап. Жұмаға дейін хабарласамыз."],
      ],
      checks: [
        { after: 2, q: "Why does Dana want the job?", options: ["The salary is high", "She loves travelling and speaks languages", "Her friend works there", "It is near her home"], a: 1 },
        { after: 4, q: "Where did Dana work last summer?", options: ["In a hotel", "At the Charyn Canyon", "In an office", "At a school"], a: 1 },
        { after: 7, q: "How is Dana dealing with her weakness?", options: ["She works at night", "She makes a plan every morning", "She asks her boss", "She ignores details"], a: 1 },
      ],
    },
    {
      id: "st6",
      level: "B1",
      icon: "🩺",
      title: "Calling the Clinic",
      cast: { Yerlan: "🧑", Receptionist: "👩‍⚕️" },
      lines: [
        ["", "Yerlan wakes up with a sore throat and a high temperature. He calls the clinic.", "Ерлан тамағы ауырып, қызуы көтеріліп оянды. Ол емханаға қоңырау шалады."],
        ["Receptionist", "City Clinic, good morning. How can I help you?", "Қалалық емхана, қайырлы таң. Сізге қалай көмектесе аламын?"],
        ["Yerlan", "Hello, I'd like to make an appointment. I've had a sore throat since yesterday, and now I have a fever.", "Сәлеметсіз бе, қабылдауға жазылғым келеді. Кешеден бері тамағым ауырады, енді қызуым да бар."],
        ["Receptionist", "I'm sorry to hear that. Dr Amanova is free at 11:30 today. Is that OK?", "Өкінішті екен. Аманова дәрігер бүгін 11:30-да бос. Сізге ыңғайлы ма?"],
        ["Yerlan", "Yes, that's perfect. Should I bring anything?", "Иә, өте жақсы. Бір нәрсе ала келуім керек пе?"],
        ["Receptionist", "Please bring your ID card. And if your temperature goes above 39 degrees, call an ambulance.", "Жеке куәлігіңізді ала келіңіз. Егер қызуыңыз 39 градустан асса, жедел жәрдем шақырыңыз."],
        ["Yerlan", "Thank you. Can I come by bus, or is it better to take a taxi?", "Рақмет. Автобуспен келсем бола ма, әлде такси дұрыс па?"],
        ["Receptionist", "A taxi is better if you feel weak. Drink plenty of warm water. See you soon.", "Әлсіз болсаңыз, такси дұрыс. Жылы суды көп ішіңіз. Көріскенше."],
      ],
      checks: [
        { after: 2, q: "What is Yerlan's problem?", options: ["A broken leg", "A sore throat and a fever", "Only a headache", "A toothache"], a: 1 },
        { after: 3, q: "When is the appointment?", options: ["At 9:30", "At 11:30", "At 13:30", "Tomorrow"], a: 1 },
        { after: 7, q: "What should Yerlan bring?", options: ["Money", "His ID card", "A photo", "Food"], a: 1 },
      ],
    },
    {
      id: "st7",
      level: "B2",
      icon: "🎤",
      title: "The Classroom Debate",
      cast: { Teacher: "👩‍🏫", Asel: "👩", Nurlan: "👨" },
      lines: [
        ["", "In an English class in Shymkent, students are debating whether smartphones should be banned at school.", "Шымкенттегі ағылшын сабағында оқушылар мектепте смартфонға тыйым салу керек пе деп пікірталас өткізіп жатыр."],
        ["Teacher", "Asel, you're arguing for the ban. Please start.", "Әсел, сен тыйымды жақтайсың. Баста."],
        ["Asel", "Smartphones distract students. Research suggests that test scores improve when phones are not allowed in class.", "Смартфон оқушылардың назарын бөледі. Зерттеулерге қарағанда, сабақта телефонға рұқсат етілмесе, тест нәтижелері жақсарады."],
        ["Nurlan", "But a complete ban is unrealistic. Phones can be valuable learning tools: we use dictionaries and educational apps every day.", "Бірақ толық тыйым шындыққа жанаспайды. Телефон — пайдалы оқу құралы: біз күнде сөздік пен оқу қосымшаларын қолданамыз."],
        ["Asel", "That's true, but how many students actually use their phones for learning during lessons? Most of them are checking social media.", "Рас, бірақ сабақ кезінде телефонды оқу үшін шынымен қанша оқушы қолданады? Көбі әлеуметтік желіні қарап отырады."],
        ["Nurlan", "Then the solution is to teach responsible use, not to ban them. Otherwise, we're not preparing students for real life.", "Онда шешім — тыйым емес, телефонды жауапкершілікпен қолдануды үйрету. Әйтпесе оқушыларды шынайы өмірге дайындамаймыз."],
        ["Teacher", "Both of you make strong points. Is there a compromise?", "Екеуіңнің де дәлелдерің мықты. Ортақ шешім бар ма?"],
        ["Asel", "Perhaps phones could stay in lockers, but teachers could allow them for specific tasks.", "Мүмкін телефондар шкафта тұрып, мұғалім оларды нақты тапсырмаларға ғана рұқсат етер."],
        ["Nurlan", "I could agree with that, as long as the rules are clear.", "Ережелер анық болса, бұған келісуге болады."],
      ],
      checks: [
        { after: 2, q: "What is Asel's main argument?", options: ["Phones are expensive", "Phones distract students", "Phones break easily", "Phones help with tests"], a: 1 },
        { after: 5, q: "What does Nurlan suggest instead of a ban?", options: ["Buying new phones", "Teaching responsible use", "Longer lessons", "More tests"], a: 1 },
        { after: 8, q: "What compromise do they reach?", options: ["A total ban", "Phones in lockers but allowed for specific tasks", "No rules at all", "Phones only at break time"], a: 1 },
      ],
    },
    {
      id: "st8",
      level: "B2",
      icon: "🚀",
      title: "The Startup Idea",
      cast: { Timur: "🧔", Zhanna: "👩‍💻" },
      lines: [
        ["", "Two friends, Timur and Zhanna, are discussing a business idea in a coffee shop in Almaty.", "Екі дос — Тимур мен Жанна Алматыдағы кофеханада бизнес идеясын талқылап отыр."],
        ["Timur", "I've been thinking about an app that connects farmers directly with city restaurants.", "Фермерлерді қаладағы мейрамханалармен тікелей байланыстыратын қосымша туралы ойлап жүрмін."],
        ["Zhanna", "Interesting. So restaurants would buy fresh products without a middleman?", "Қызық. Яғни мейрамханалар жаңа өнімді делдалсыз сатып алады ғой?"],
        ["Timur", "Exactly. Farmers would earn more, and restaurants would pay less. Everyone wins.", "Дәл солай. Фермерлер көбірек табады, мейрамханалар азырақ төлейді. Бәрі ұтады."],
        ["Zhanna", "It sounds promising, but have you considered delivery? Fresh products need to arrive quickly, especially in summer.", "Үміт күттіреді, бірақ жеткізуді ойладың ба? Жаңа өнім тез жетуі керек, әсіресе жазда."],
        ["Timur", "That's the hardest part. We could start with a few farms near the city and use refrigerated vans.", "Ең қиыны сол. Қала маңындағы бірнеше фермадан бастап, тоңазытқышы бар көліктерді қолдануға болады."],
        ["Zhanna", "And how will you persuade farmers to use an app? Many of them prefer phone calls.", "Ал фермерлерді қосымшаны қолдануға қалай көндіресің? Көбі телефонмен сөйлескенді жөн көреді."],
        ["Timur", "Good point. Maybe the first version should work through a simple chatbot in Kazakh and Russian.", "Орынды сұрақ. Бәлкім, алғашқы нұсқасы қазақ және орыс тіліндегі қарапайым чат-бот арқылы жұмыс істеуі керек."],
        ["Zhanna", "Now that's something I'd invest in. Let's write a business plan this weekend.", "Міне, бұған инвестиция салар едім. Осы демалыста бизнес-жоспар жазайық."],
      ],
      checks: [
        { after: 3, q: "What does the app do?", options: ["Delivers pizza", "Connects farmers with restaurants", "Teaches cooking", "Sells phones"], a: 1 },
        { after: 4, q: "What problem does Zhanna mention first?", options: ["The name", "Delivery speed", "The colour of the app", "The price of coffee"], a: 1 },
        { after: 8, q: "How will they make the app easier for farmers?", options: ["A chatbot in Kazakh and Russian", "An English-only website", "Paper letters", "TV adverts"], a: 0 },
      ],
    },
  ];
  D.stories = STORIES;

  /* ---------- UNT-style questions with one or more correct answers ---------- */
  const multi = (question, options, answers) => ({ q: question, options, answers });
  D.untMulti = [
    multi("Choose ALL grammatically correct sentences.", ["She doesn't like coffee.", "She don't like coffee.", "He has lived here since 2019.", "He lives here since 2019.", "They were watching TV when I called."], [0, 2, 4]),
    multi("Choose ALL synonyms of “important”.", ["significant", "crucial", "minor", "essential", "trivial"], [0, 1, 3]),
    multi("Choose ALL irregular verbs.", ["go", "play", "write", "watch", "buy", "open"], [0, 2, 4]),
    multi("Choose ALL sentences in the Passive Voice.", ["The bridge was built in 1990.", "They built the bridge.", "English is spoken here.", "She speaks English.", "The letter has been sent."], [0, 2, 4]),
    multi("Choose ALL countable nouns.", ["apple", "water", "chair", "information", "idea", "money"], [0, 2, 4]),
    multi("Choose ALL words with a negative meaning.", ["harmful", "beneficial", "dangerous", "useful", "unpleasant"], [0, 2, 4]),
    multi("Choose ALL linking words that show contrast.", ["however", "therefore", "although", "moreover", "whereas"], [0, 2, 4]),
    multi("Choose ALL correct comparative sentences.", ["This book is better than that one.", "She is more taller than me.", "Astana is colder than Almaty.", "It is the most cheap option.", "English is easier than Chinese for me."], [0, 2, 4]),
    multi("Choose ALL verbs that go with “a decision”.", ["make", "do", "take", "reach", "say"], [0, 2, 3]),
    multi("Choose ALL correct Present Perfect sentences.", ["I have seen this film yesterday.", "I have already finished my homework.", "Have you ever been to Turkistan?", "She has went home.", "We haven't eaten yet."], [1, 2, 4]),
    multi("Choose ALL words connected with the environment.", ["pollution", "recycling", "salary", "deforestation", "interview"], [0, 1, 3]),
    multi("Choose ALL modal verbs.", ["can", "must", "often", "should", "very", "might"], [0, 1, 3, 5]),
    multi("Choose ALL sentences with correct articles.", ["She is an engineer.", "I saw a elephant.", "The sun is very bright.", "He plays the football every day.", "I like music."], [0, 2, 4]),
    multi("Choose ALL adjectives.", ["quickly", "beautiful", "happiness", "dangerous", "careful", "decide"], [1, 3, 4]),
    multi("Choose ALL correct questions.", ["Where do you live?", "Where you live?", "Did she call you?", "Does he works here?", "What are you doing now?"], [0, 2, 4]),
  ];
})();
