export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  tagColor: 'gold' | 'green' | 'gray';
  image: string;
  featured: boolean;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: 'egjp-concours-gastronomique-2024',
    title: "L'EGJP remporte le Grand Prix du concours gastronomique d'Afrique centrale",
    excerpt:
      "Nos étudiants de 3ème année ont décroché la première place lors du concours interécoles culinaires d'Afrique centrale, organisé à Libreville en novembre 2024.",
    date: '15 novembre 2024',
    tag: 'Distinction',
    tagColor: 'gold',
    image: '/images/gastro.jpg',
    featured: true,
    content: [
      "C'est une victoire qui résonne bien au-delà des frontières du Congo-Brazzaville. Les étudiants de troisième année de l'École de Gastronomie Jean Paul II ont remporté le Grand Prix du concours gastronomique d'Afrique centrale, organisé les 8 et 9 novembre 2024 à Libreville, Gabon. Face à dix-sept équipes venues du Cameroun, du Gabon, de la RDC et de la Côte d'Ivoire, la brigade de l'EGJP s'est imposée par la précision technique de ses gestes et l'originalité de ses créations.",
      "Le thème imposé cette année était « Les saveurs oubliées d'Afrique centrale » — un défi exigeant qui réclamait à la fois une maîtrise des techniques gastronomiques européennes et une connaissance approfondie des produits locaux. Notre équipe, composée de cinq étudiants encadrés par le Chef Jean-Marie Nkounga, a proposé un menu en quatre services autour du maboké de poisson fumé, des feuilles de manioc en espuma, et d'un dessert au chocolat noir du Congo relevé de poivre de Selim.",
      "« Nous avons voulu montrer que la gastronomie africaine n'est pas un folklore, c'est une haute cuisine qui mérite d'être reconnue à l'échelle mondiale », a déclaré Éric Moukengué, chef de brigade et lauréat du Prix du meilleur chef de partie. Ses camarades Sarah Batekele, Arthur Mouanda, Priscille Nzingoula et Joss Nkembo ont respectivement reçu des mentions spéciales pour la maîtrise des cuissons, la créativité en pâtisserie et le service en salle.",
      "Le jury, présidé par la cheffe étoilée gabonaise Joëlle Obiang, a salué « un niveau de finition rarement atteint par des étudiants encore en formation, et une capacité à raconter une histoire gustative cohérente du début à la fin du repas ». L'EGJP reçoit ainsi pour la deuxième fois de son histoire le Grand Prix de ce concours, après son premier sacre en 2018.",
      "La direction de l'école a tenu à remercier les partenaires qui rendent possible cette participation annuelle : Valrhona pour la formation en chocolaterie, les Chefs du restaurant La Petite Faim pour les entraînements quotidiens, et les familles des étudiants pour leur soutien indéfectible. Les cinq lauréats seront reçus lors d'une cérémonie de remise de trophée ouverte à l'ensemble de l'école le 20 novembre prochain.",
    ],
  },
  {
    slug: 'nouvelle-promotion-janvier-2025',
    title: 'Ouverture des candidatures — Promotion Janvier 2025',
    excerpt:
      "L'EGJP ouvre ses inscriptions pour la promotion de janvier 2025. Formations courtes et modules professionnels disponibles.",
    date: '1 décembre 2024',
    tag: 'Inscriptions',
    tagColor: 'green',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    featured: false,
    content: [
      "L'École de Gastronomie Jean Paul II est heureuse d'annoncer l'ouverture officielle des candidatures pour la Promotion Janvier 2025. À partir du 1er décembre 2024 et jusqu'au 15 janvier 2025, les dossiers seront acceptés pour l'ensemble des formations proposées par l'établissement. Cette nouvelle promotion intégrera plusieurs innovations pédagogiques, dont un semestre de mobilité internationale en partenariat avec un lycée hôtelier parisien.",
      "Trois formations sont ouvertes à la candidature. Le CAP Cuisine internationale (24 mois) forme aux fondamentaux de la cuisine professionnelle avec un fort ancrage sur la gastronomie africaine contemporaine. Le BTS Management de la Restauration (36 mois) prépare aux fonctions d'encadrement en restauration et hôtellerie. Enfin, le Certificat de Pâtisserie Fine (12 mois) est un module intensif pour les professionnels souhaitant se spécialiser dans l'art sucré.",
      "Les conditions d'admission varient selon la formation visée. Pour les formations longues, les candidats doivent être titulaires du Baccalauréat ou équivalent, et passer un entretien de motivation devant un jury de formateurs. Pour le Certificat de Pâtisserie Fine, une expérience professionnelle d'au moins un an en restauration est requise. Tous les candidats fourniront une lettre de motivation manuscrite, un CV illustré de deux photos de réalisations culinaires, et une copie de leurs diplômes.",
      "La Promotion Janvier 2025 intégrera une nouveauté majeure : un semestre de mobilité internationale optionnel, rendu possible par l'accord signé en octobre 2024 avec le lycée hôtelier Vatel de Paris. Ce dispositif représente une opportunité inédite pour les futurs professionnels congolais de la gastronomie de compléter leur formation en France.",
      "Pour obtenir un dossier de candidature, rendez-vous au secrétariat de l'EGJP, Avenue de la Paix à Brazzaville, du lundi au vendredi de 8h à 16h, ou envoyez un email à inscription@egjp-brazzaville.cg. Les entretiens de sélection se tiendront du 20 au 31 janvier 2025. Les résultats seront communiqués le 5 février 2025.",
    ],
  },
  {
    slug: 'chef-makosso-etoile-microbrasserie',
    title: 'Josiane Makosso, diplômée EGJP, ouvre son restaurant étoilé à Pointe-Noire',
    excerpt:
      "Ancienne élève de la promotion 2021, Josiane vient d'ouvrir « Saveurs du Kouilou », qui reçoit déjà des critiques élogieuses de la presse gastronomique.",
    date: '20 octobre 2024',
    tag: 'Succès Alumni',
    tagColor: 'gold',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    featured: false,
    content: [
      "Il y a trois ans, Josiane Makosso quittait les cuisines pédagogiques de l'EGJP avec son diplôme et une ambition chevillée au corps : créer un restaurant qui parlerait au monde de la richesse culinaire du Kouilou. Le 3 octobre 2024, « Saveurs du Kouilou » a ouvert ses portes au cœur de Pointe-Noire, et la critique gastronomique ne s'y est pas trompée.",
      "Dès le premier mois d'activité, le restaurant a été distingué par le guide Africa Food Excellence comme l'une des adresses « à surveiller de près » sur le continent. Le magazine panafricain Fourchette & Afrique lui a consacré un double article en novembre, saluant « une cuisine de terroir sublimée par une technique sans faille et une vision artistique singulière ». La cheffe de 29 ans y propose une carte courte, renouvelée chaque semaine selon les arrivages du marché et la pêche locale.",
      "Josiane se souvient de ses années à l'EGJP comme d'une période fondatrice. « C'est ici que j'ai appris que la rigueur et la créativité ne s'opposent pas — elles se complètent. Le Chef Nkounga nous répétait que maîtriser la technique, c'est se libérer pour créer. » Elle cite en particulier les cours de cuisine franco-africaine de Chef Patricia Loemba et les stages pratiques à La Petite Faim comme des moments décisifs.",
      "Le restaurant compte aujourd'hui vingt-deux couverts, un chef de cuisine, deux cuisiniers de partie et une brigade de salle formée en partie par d'anciens camarades de l'EGJP. Le menu signature autour du capitaine fumé aux herbes sauvages du Mayombe, de la banane plantain rôtie au beurre noisette et du fondant au cacao de Sangha est déjà un incontournable de la scène gastronomique pointénégrine.",
      "« Saveurs du Kouilou » est la preuve vivante que la formation dispensée à l'EGJP ouvre des portes vers l'excellence. Josiane Makosso sera l'invitée d'honneur de la prochaine cérémonie de remise des diplômes, prévue en juillet 2025. Elle proposera une master class ouverte à tous les étudiants sur la mise en valeur des produits locaux dans la cuisine gastronomique contemporaine.",
    ],
  },
  {
    slug: 'partenariat-lycee-hotelier-paris',
    title: "Nouveau partenariat académique avec un lycée hôtelier parisien",
    excerpt:
      "L'EGJP signe un accord de coopération pédagogique permettant des échanges d'étudiants et de formateurs avec une institution française de renom.",
    date: '5 octobre 2024',
    tag: 'Partenariat',
    tagColor: 'gray',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    featured: false,
    content: [
      "L'École de Gastronomie Jean Paul II franchit une nouvelle étape dans son rayonnement international. Le 1er octobre 2024, la direction de l'EGJP et celle du lycée hôtelier et de tourisme Vatel Paris ont signé un accord-cadre de coopération pédagogique, lors d'une cérémonie tenue dans les locaux de l'ambassade du Congo à Paris. Cet accord ouvre la voie à des échanges académiques inédits entre les deux institutions.",
      "Concrètement, le partenariat prévoit plusieurs axes de collaboration. Un programme d'échanges d'étudiants permettra à deux à quatre étudiants de l'EGJP d'effectuer un semestre à Paris chaque année, et réciproquement des étudiants français viendront en immersion à Brazzaville. Des missions d'expertise croisée permettront à des formateurs de chaque établissement d'intervenir dans l'autre comme chefs invités ou conférenciers.",
      "Pour le directeur de l'EGJP, cet accord répond à une vision portée depuis la fondation de l'école. « Nous formons des professionnels capables de s'épanouir partout dans le monde. Ce partenariat est une formidable opportunité pour nos étudiants de confronter leur vision à celle d'une école française de référence. » Son homologue parisien a souligné de son côté : « La gastronomie africaine est l'un des grands territoires d'innovation culinaire du XXIe siècle. Nous avons tout à apprendre d'une école comme l'EGJP. »",
      "Le programme d'échanges ouvrira dès la rentrée de janvier 2025. Les candidatures des étudiants souhaitant participer à la première cohorte sont attendues pour le 31 décembre 2024. Les critères de sélection incluent l'excellence académique (moyenne supérieure à 14/20), la maîtrise du français écrit et oral, et une lettre de motivation développant le projet professionnel du candidat.",
      "Ce partenariat s'inscrit dans une dynamique plus large de structuration du réseau international de l'EGJP, qui entretient déjà des liens avec l'École Valrhona pour la chocolaterie et l'Institut Paul Bocuse de Lyon pour la formation des formateurs. La direction travaille également à des accords similaires avec des institutions du Maroc et de l'Île Maurice.",
    ],
  },
  {
    slug: 'atelier-chocolat-valrhona',
    title: "Master class Valrhona — 2 jours d'immersion chocolaterie",
    excerpt:
      "Le Chef chocolatier de Valrhona a animé une master class exceptionnelle à l'EGJP. Retour sur deux jours intenses de création et de passion.",
    date: '22 septembre 2024',
    tag: 'Formation',
    tagColor: 'gold',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1200&q=80',
    featured: false,
    content: [
      "Les 18 et 19 septembre 2024, l'École de Gastronomie Jean Paul II a accueilli le Chef chocolatier Emmanuel Forestier, Ambassadeur Valrhona pour l'Afrique subsaharienne, pour deux jours d'une master class d'exception. Vingt-quatre étudiants sélectionnés sur dossier, issus des promotions de deuxième et troisième année, ont vécu une immersion totale dans l'univers du grand chocolat.",
      "Le premier jour a été consacré aux fondamentaux de la transformation du cacao, depuis la fève jusqu'au produit fini. Emmanuel Forestier a introduit les participants aux variétés de cacao cultivées en Afrique centrale, dont le précieux cacao de Sangha produit dans le nord du Congo. L'après-midi fut entièrement dédié au tempérage et à la réalisation de tablettes moulées avec inclusions, en utilisant exclusivement le cacao local comme base de travail.",
      "La seconde journée a porté sur les applications gastronomiques du chocolat : ganaches à basse température, entremets chocolat-fruit de la passion, et accord mets-chocolat en contexte de menu dégustation. Le clou de la session a été la réalisation collective d'une pièce artistique en chocolat noir de 1,20 mètre représentant un masque traditionnel du Congo-Brazzaville — œuvre exposée depuis dans le hall d'entrée de l'école.",
      "« Ce qui m'a frappé chez ces étudiants, c'est leur sensibilité au produit et leur instinct créatif », a confié Emmanuel Forestier à l'issue de la master class. « Ils travaillent avec des matières premières exceptionnelles à leur porte. L'enjeu pour l'Afrique centrale, c'est de valoriser son propre cacao en développant une filière chocolat de qualité, et les chefs que vous formez ici seront des acteurs essentiels de cette transformation. »",
      "Valrhona s'est engagé à renouveler cette master class annuellement dans le cadre du partenariat pédagogique qui lie les deux institutions depuis 2019. Chef Patricia Loemba, responsable de la formation en pâtisserie, a par ailleurs annoncé l'ouverture prochaine d'un module de spécialisation en chocolaterie premium dès la rentrée de septembre 2025.",
    ],
  },
  {
    slug: 'remise-diplomes-promotion-2024',
    title: 'Cérémonie de remise des diplômes — Promotion 2024',
    excerpt:
      "Une soirée d'exception pour 52 nouveaux diplômés qui rejoignent le réseau des professionnels formés par l'EGJP depuis sa création.",
    date: '10 juillet 2024',
    tag: 'Événement',
    tagColor: 'gray',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80',
    featured: false,
    content: [
      "Le 6 juillet 2024, l'École de Gastronomie Jean Paul II a célébré la remise des diplômes de sa Promotion 2024 lors d'une cérémonie d'exception organisée dans les jardins du Grand Hôtel de Kintélé. Cinquante-deux nouvelles recrues ont rejoint le réseau des diplômés de l'EGJP, portant le total à plus de 540 professionnels formés depuis la création de l'école en 2009.",
      "La soirée a été présidée par le directeur de l'EGJP, entouré de l'ensemble de l'équipe pédagogique et de plusieurs personnalités du monde gastronomique congolais. Le ministre de la Formation Professionnelle et Technique, représenté par son directeur de cabinet, a remis les diplômes aux majors de promotion : Sandrine Mbemba (CAP Cuisine), Thierry Ossete (BTS Management) et Clarisse Nzaba (Certificat de Pâtisserie Fine).",
      "La cérémonie a été marquée par un dîner de gala entièrement préparé et servi par les promotionnaires eux-mêmes, sous la supervision des chefs formateurs — une tradition qui veut que les diplômés fassent leurs adieux à l'école en la cuisine plutôt qu'en l'assistant. Au menu : quatre services autour des produits du terroir congolais, du moambe revisité en amuse-bouche à la tarte aux fruits tropicaux en pièce montée.",
      "Le discours de la major de promotion, Sandrine Mbemba, a ému l'ensemble des convives. « L'EGJP ne nous a pas seulement appris à cuisiner. Elle nous a appris à penser, à créer, à prendre soin de nos clients et à être fiers de qui nous sommes. Je repars avec bien plus qu'un diplôme : je repars avec une communauté et la certitude que la gastronomie africaine a un avenir magnifique devant elle. »",
      "La Promotion 2024 affiche un taux de placement de 94 % dès le mois de juin. Les diplômés rejoignent des établissements de restauration et d'hôtellerie au Congo, au Gabon, en Côte d'Ivoire et en France. L'EGJP leur souhaite une belle carrière et les accueillera avec fierté lors des prochaines manifestations alumni.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
