import { BrandGoods } from "@/components/BrandGoods";
import { Logo } from "@/components/Logo";
import { ProducerCard } from "@/components/ProducerCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

const navItems = [
  ["理念", "#concept"],
  ["物語", "#story"],
  ["商品", "#products"],
  ["生産者", "#producers"],
  ["マルシェ", "#marche"],
  ["農泊", "#stay"],
  ["お問い合わせ", "#contact"],
];

const coreValues = [
  {
    label: "水脈",
    title: "射水。水を射るという名の地。",
    text: "霊峰立山の雪解け水は地下を巡り、長い時間をかけて浄化され、この土地に湧き出します。水が矢のように駆け抜ける、その清流こそが野菜の起源です。",
  },
  {
    label: "星読",
    title: "星と土の対話。",
    text: "古代、農は星や月のリズムと共にありました。自然のサイクルに耳を澄ませることで、作物は本来の生命力を宿し、野菜は軽やかな力を取り戻します。",
  },
  {
    label: "養土",
    title: "傷ついた大地を癒やす「手」。",
    text: "自然栽培は、肥料や農薬に頼らず土本来の力を取り戻す引き算の農法。土を癒やすことが、食べる人の心身を整えることへとつながっていきます。",
  },
];

const products = [
  {
    title: "季節の野菜",
    description: "子どもが『甘い』と驚く本物の味。射水の清流と土が育てる、旬の生命力をそのまま届けます。",
    tags: ["自然栽培", "射水産", "季節限定"],
    tone: "water" as const,
  },
  {
    title: "椎茸",
    description: "湿度と空気の密度まで整えながら育てる、深い香りと澄んだ余韻の山の恵みです。",
    tags: ["生産者の顔が見える", "射水産"],
    tone: "leaf" as const,
  },
  {
    title: "はちみつ",
    description: "ケイローンからアリスタイオスへと受け継がれた知恵を思わせる、静かな甘みの贈りもの。",
    tags: ["季節限定", "ギフト対応"],
    tone: "gold" as const,
  },
  {
    title: "加工品",
    description: "素材の純度を損なわず、毎日の暮らしに取り込みやすいかたちへ整えた小さな逸品です。",
    tags: ["少量生産", "ライフスタイル"],
    tone: "mist" as const,
  },
  {
    title: "ギフトセット",
    description: "古の祈りと現代のウェルネスをひと箱に。家族の健康を願う一矢として贈れます。",
    tags: ["射水産", "ギフト対応", "季節限定"],
    tone: "navy" as const,
  },
];

const slowStayScenes = [
  {
    title: "朝の瞑想",
    text: "棚田と山並みを望む畑で、呼吸を整えながら一日の感覚をひらく時間。",
    src: "/slow-stay-meditation.png",
    alt: "棚田を望む畑で瞑想する農と祈りのスローステイ参加者たち",
    className: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[16/10] lg:aspect-auto",
  },
  {
    title: "花の手しごと",
    text: "バラの香りに触れながら、季節の恵みをやさしく摘み取る体験。",
    src: "/slow-stay-rose.png",
    alt: "バラ畑で花を摘む農と祈りのスローステイ参加者たち",
    className: "",
    aspect: "aspect-[16/10]",
  },
  {
    title: "土地を味わう食卓",
    text: "自然に育った野菜と火のぬくもりを囲み、その土地の滋味を分かち合う時間。",
    src: "/slow-stay-bbq.png",
    alt: "自然に育った野菜と食材を囲む農と祈りのスローステイの食体験",
    className: "",
    aspect: "aspect-[16/10]",
  },
  {
    title: "焚火と語らい",
    text: "火を囲み、土地の人や参加者と言葉を交わしながら心をほどく夜。",
    src: "/slow-stay-fire.png",
    alt: "古民家の庭で焚火を囲む農と祈りのスローステイ参加者たち",
    className: "md:col-span-2 lg:col-span-3",
    aspect: "aspect-[16/9]",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-sagittarius-porcelain">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-sagittarius-navy/88 backdrop-blur-xl">
        <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-5 md:px-8">
          <a aria-label="水のサジタリオ トップへ" className="relative translate-y-1.5" href="#top">
            <Logo compact inverted />
          </a>
          <nav aria-label="主要ナビゲーション" className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                className="text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:text-sagittarius-water"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            className="hidden rounded-full border border-sagittarius-gold/70 px-5 py-2 text-xs font-semibold tracking-[0.22em] text-white transition hover:bg-sagittarius-gold hover:text-sagittarius-navy md:inline-flex"
            href="#contact"
          >
            お問い合わせ
          </a>
        </div>
      </header>

      <section
        className="relative flex min-h-[92svh] items-center overflow-hidden bg-hero-radial px-5 pb-16 pt-28 text-white md:px-8 md:pb-20 md:pt-36"
        id="top"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            aria-label="水のサジタリオ ブランドムービー"
            autoPlay
            className="h-full w-full object-cover object-center opacity-35 md:opacity-50"
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/hero-top.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,42,74,0.82)_0%,rgba(8,42,74,0.64)_38%,rgba(8,42,74,0.42)_68%,rgba(8,42,74,0.56)_100%)]" />
        <div className="absolute inset-0 star-field opacity-80" />
        <div className="absolute inset-0 ripple-field opacity-25" />
        <div className="absolute left-[7%] top-[24%] h-72 w-72 rounded-full border border-sagittarius-water/25" />
        <div className="absolute right-[-7rem] top-24 h-[34rem] w-[34rem] rounded-full border border-sagittarius-gold/25" />
        <div className="absolute bottom-24 right-[18%] h-px w-56 rotate-[-30deg] bg-sagittarius-gold/50" />
        <div className="absolute bottom-10 right-4 opacity-25 md:hidden">
          <Logo className="scale-[1.2]" inverted markOnly />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="reveal max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.34em] text-sagittarius-water">
              射水のスローベジタブル
              <span className="h-px w-16 bg-sagittarius-gold" />
            </p>
            <h1 className="serif-heading text-5xl font-semibold leading-[1.15] md:text-7xl lg:text-8xl">
              水の
              <br />
              サジタリオ
            </h1>
            <p className="serif-heading mt-8 max-w-2xl text-2xl leading-[1.7] text-white/88 md:text-4xl">
              私を整え、家族を育む、
              <br className="hidden md:block" />
              引き算の食卓。
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              肥料も、農薬も、私たちの都合も、なにも足さない。
              ただ、射水の水と土の記憶、そして星の巡りに耳を澄ませ、
              効率やスピードから離れた「最高のスロー」を食卓へ届けます。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold tracking-[0.16em] text-sagittarius-navy shadow-soft transition hover:-translate-y-0.5 hover:bg-sagittarius-water"
                href="#concept"
              >
                ブランドストーリーを見る
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-sagittarius-gold/80 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-sagittarius-gold hover:text-sagittarius-navy"
                href="#products"
              >
                商品について知る
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative mx-auto hidden w-full max-w-[33rem] justify-center md:flex lg:justify-end">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 p-8 shadow-soft backdrop-blur">
              <div className="absolute inset-6 rounded-[1.5rem] border border-sagittarius-water/24" />
              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full border border-sagittarius-gold/25" />
              <div className="absolute bottom-8 left-8 h-px w-28 bg-sagittarius-gold/60" />
              <div className="relative z-10 flex min-h-[30rem] items-center justify-center">
                <Logo className="scale-[1.7]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-32" id="concept">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="はじまり"
              title="射水のスローベジタブル。私を整え、家族を育む、引き算の食卓。"
              lead="自然の大きなリズムに身を委ねて育つ野菜には、女性の繊細なリズムに寄り添い、子どもたちの五感を呼び覚ます、混じり気のない強さが宿ります。"
            />
          </div>
          <div className="scroll-reveal rounded-[1.5rem] border border-sagittarius-water/35 bg-water-sheen p-8 shadow-soft md:p-12">
            <p className="text-lg leading-9 text-sagittarius-ink/82">
              「水のサジタリオ」が届けたいのは、ただ新鮮な野菜ではありません。
              肥料も、農薬も、私たちのエゴも、なにも足さず、
              射水の水と土の記憶、そして星の巡りに身を委ねて育てる、
              引き算の農から生まれる静かな豊かさです。
            </p>
            <p className="mt-6 serif-heading text-2xl leading-[1.7] text-sagittarius-navy">
              効率やスピードから離れた、
              最高の「スロー」をあなたの食卓へ。
            </p>
          </div>
        </div>
      </section>

      <section className="water-texture bg-sagittarius-mist px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="三つの核心"
            title="整えること、育むこと、ゆだねること。"
            lead="射水の風土、天体と農の記憶、そして土を癒やす手。スローベジタブルという思想を、暮らしに届く三つの核心としてまとめました。"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {coreValues.map((value, index) => (
              <article
                className="scroll-reveal rounded-[1.35rem] border border-white bg-white/88 p-8 shadow-soft"
                key={value.label}
              >
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sagittarius-gold">
                    {value.label}
                  </p>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-sagittarius-water text-sm font-semibold text-sagittarius-navy">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="serif-heading text-3xl font-semibold leading-[1.5] text-sagittarius-navy">
                  {value.title}
                </h3>
                <p className="mt-5 text-sm leading-8 text-sagittarius-ink/72">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-32" id="story">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="物語"
              title="「射水」を翻訳する、イタリアの響き。"
              lead="サジタリオは、イタリア語で射手座を意味します。矢を放つ星座の名に、射水の清らかな水を重ね、野菜という一矢に乗せて食卓へ射抜く。そこに、イタリアのスローフード哲学と、射水ならではのスローベジタブルの思想を重ねました。"
            />
            <div className="mt-8 space-y-6 text-sm leading-8 text-sagittarius-ink/76 md:text-base">
              <p>
                イタリア発祥の「スローフード」は、その土地の風土と食文化を守り、
                効率やスピードでは測れない食の豊かさを取り戻す思想です。
              </p>
              <p>
                日本のベニスと呼ばれる内川の水辺文化、立山の雪解け水、そして射水の農の記憶。
                その土地ならではの時間の流れを受け取り、日々の食卓へ訳し直すこと。
                それが「射水のスローベジタブル」という私たちの答えです。
              </p>
            </div>
          </div>
          <div className="scroll-reveal grid gap-6">
            <article className="overflow-hidden rounded-[1.5rem] border border-sagittarius-water/35 bg-sagittarius-navy p-8 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sagittarius-water">
                土地の記憶
              </p>
              <h3 className="serif-heading mt-4 text-3xl font-semibold leading-[1.45]">
                日本のベニス、射水。
                <br />
                水と生きる場所。
              </h3>
              <p className="mt-5 text-sm leading-8 text-white/76">
                ベネチアを思わせる内川の景観と、立山連峰の雪解け水が代流となって潜り抜けてきた豊かな水。
                私たちの野菜は、この「水」と共に育ちます。
              </p>
            </article>
            <article className="overflow-hidden rounded-[1.5rem] border border-sagittarius-water/35 bg-white p-8 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sagittarius-gold">
                象徴
              </p>
              <h3 className="serif-heading mt-4 text-3xl font-semibold leading-[1.45] text-sagittarius-navy">
                地理的な「真ん中」を超えた、
                命の的。
              </h3>
              <p className="mt-5 text-sm leading-8 text-sagittarius-ink/72">
                海、川、里山が凝縮された富山県の中心、射水。
                ここは単なる中間地点ではなく、豊かな自然のエネルギーが収束する「的」の真ん中です。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative bg-sagittarius-navy px-5 py-24 text-white md:px-8 md:py-32">
        <div className="absolute inset-0 star-field opacity-45" />
        <div className="absolute inset-0 ripple-field opacity-10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="神話と伝承"
            light
            title="古の祈りと、射手座の知恵を現代の農へ。"
            lead="1000年続く流鏑馬神事の一矢、古代農耕と天体の関係、そしてケイローンの象徴性。水のサジタリオは、神話と土地の記憶を現代の食卓へ翻訳します。"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="scroll-reveal rounded-[1.35rem] border border-white/14 bg-white/8 p-7 backdrop-blur">
              <h3 className="serif-heading text-2xl font-semibold text-white">
                古の祈り。五穀豊穣を願う「一矢」
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/78">
                射水市・下村加茂神社に1000年続く神事「やんさんま」。
                疾走する馬上から放たれる矢は、武芸ではなく五穀豊穣への祈りでした。
                豊かな実りを願い、天と地を繋ぐその一矢は、この土地の記憶そのものです。
              </p>
            </article>
            <article className="scroll-reveal rounded-[1.35rem] border border-white/14 bg-white/8 p-7 backdrop-blur">
              <h3 className="serif-heading text-2xl font-semibold text-white">
                星と土の対話。古の知恵
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/78">
                古代、農業は星や月のリズムと共にありました。
                種まきや収穫の時期を天体から学び、自然のサイクルに従うことで、作物は本来の生命力を宿します。
              </p>
            </article>
            <article className="scroll-reveal rounded-[1.35rem] border border-white/14 bg-white/8 p-7 backdrop-blur">
              <h3 className="serif-heading text-2xl font-semibold text-white">
                半人半馬の賢者・ケイローン
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/78">
                射手座のモデルであるケイローンは、荒ぶる自然と高度な知性の融合体。
                自然の力を尊重し、人の知恵をそっと添える農業の本質そのものを表しています。
              </p>
            </article>
            <article className="scroll-reveal rounded-[1.35rem] border border-white/14 bg-white/8 p-7 backdrop-blur">
              <h3 className="serif-heading text-2xl font-semibold text-white">
                土を癒やし、心身を整える
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/78">
                ケイローンは「傷ついた癒やし手」と呼ばれました。
                傷ついた大地を癒やすように、自然栽培は土本来の力を取り戻し、そこから生まれる野菜を通して食べる人の心身へ静かな整いを広げます。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-sagittarius-porcelain px-5 py-24 md:px-8 md:py-32" id="products">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="商品"
            title="射水から届く、まっすぐな一矢。"
            lead="今後の展開を見据えながら、野菜、椎茸、はちみつ、加工品、ギフトセットへ。土地の清流と強いこだわりを、暮らしのかたちに変えて届けます。"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-sagittarius-deep px-5 py-24 text-white md:px-8 md:py-32" id="producers">
        <div className="absolute inset-0 water-texture opacity-20" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="生産者"
              light
              title="射手は、強いこだわりを持つ農家たち。"
              lead="妥協なき栽培技術。土への執着。私たちの農業は静かな闘いです。その強いこだわりこそが、弓を引き絞る力になります。子どもや家族の暮らしに寄り添う視点もまた、水のサジタリオを支える大切な力です。"
            />
          </div>
          <div className="grid gap-6">
            <ProducerCard
              name="marufarm"
              subtitle="代表：丸山友徳。看護師の視点から、食と農で健康と幸せをアシストする生産者"
              description="富山県射水市で、農薬・肥料・除草剤を使わない自然栽培を実践し、固定種・在来種の野菜、原木椎茸、養蜂まで手がける生産者。『安心』と『食育の機会』を届けたいという思いのもと、看護師としての経験を重ねながら、身体にやさしく、環境にも寄り添う農を育てています。"
            />
            <ProducerCard
              name="射水市自然農園"
              subtitle="代表：石垣孝太。子どもと家族の食卓に寄り添う、有機農業の実践者"
              description="2025年4月に射水市内小学校教員から有機農業の世界へ。自然の中で育った野菜を、射水の大地で育つ子どもたちへ届けたいという思いを軸に、子育て中のお父さん・お母さんに伴走する事業づくりにも取り組んでいます。『土とあそんで、おいしく食べる。』という感覚を、日々の暮らしへひらく生産者です。"
            />
            <ProducerCard
              name="はなわっか畑"
              subtitle="代表：花島陽子。無肥料・無農薬の自然栽培と、食の手しごとをつなぐ生産者"
              description="富山で無肥料・無農薬の自然栽培に取り組みながら、味噌づくりのような手しごとの食体験にも寄り添う生産者。土にふれ、仕込んで、味わうところまでをひとつの循環として大切にし、家族の食卓にやさしい記憶を重ねていくような農のあり方を育んでいます。"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="生産者のしるし"
            title="透明袋の中に、それぞれの畑の個性を。"
            lead="かぶや葉もの、きのこ、にんじん、トマト。透明袋の中に野菜そのものの表情を見せながら、marufarm、はなわっか畑、射水自然農園のしるしと、水のサジタリオのブランドシールが並ぶことで、個性と統一感がひとつの売場に結ばれます。"
          />
          <div className="mt-14 overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/85 shadow-soft">
            <div className="relative aspect-[16/10] w-full md:aspect-[16/8.4]">
              <Image
                alt="透明袋に入った野菜に、marufarm、はなわっか畑、射水自然農園と水のサジタリオのシールが貼られた商品イメージ"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 1120px, 100vw"
                src="/producer-stickers-scene.png"
              />
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-sagittarius-ink/72 md:grid-cols-4">
            <div className="rounded-[1.1rem] border border-sagittarius-water/35 bg-sagittarius-mist/60 px-4 py-3">
              葉もの・かぶ
            </div>
            <div className="rounded-[1.1rem] border border-sagittarius-water/35 bg-sagittarius-mist/60 px-4 py-3">
              きのこ
            </div>
            <div className="rounded-[1.1rem] border border-sagittarius-water/35 bg-sagittarius-mist/60 px-4 py-3">
              にんじん
            </div>
            <div className="rounded-[1.1rem] border border-sagittarius-water/35 bg-sagittarius-mist/60 px-4 py-3">
              レタス・トマト
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-32" id="marche">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="scroll-reveal overflow-hidden rounded-[1.5rem] border border-sagittarius-water/40 bg-white shadow-soft">
            <div className="relative aspect-[4/5] w-full md:aspect-[5/4]">
              <Image
                alt="水のサジタリオのマルシェ出店ブースイメージ"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                src="/marche-booth.png"
              />
            </div>
          </div>
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="マルシェ / 整う暮らし"
              title="マルシェで出会う、水のサジタリオ。"
              lead="濃紺と白を基調にしたブースに、弓矢のエンブレム、波紋の意匠、透明袋に包まれた野菜たち。食卓へ届く前の一瞬から、水のサジタリオの世界観がまっすぐに伝わる場をつくります。"
            />
            <div className="mt-8 space-y-5 text-sm leading-8 text-sagittarius-ink/76 md:text-base">
              <p>
                ブランドの佇まいがそのまま売場になるように、のぼり、タペストリー、テーブルクロス、商品シールまでを統一。
                射水の水の清らかさと、星に導かれる静かな物語を、視覚からも感じられるブース設計です。
              </p>
              <p>
                葉もの、かぶ、きのこ、にんじん、レタス、トマトなどの旬の野菜を、透明袋の中にそのまま見せることで、
                素材の生命感と生産者ごとの個性がひと目で伝わります。手に取る前から、暮らしが少し整う気配を届けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="water-texture bg-sagittarius-mist px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="ブランドグッズ"
            title="暮らしに寄り添う、世界観のかけら。"
            lead="ロゴや弓矢、水紋の余韻をまとったTシャツ、トート、包装資材まで。ブランドが日常に静かに溶け込む展開を見せます。"
          />
          <div className="mt-14 overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/80 shadow-soft">
            <div className="relative aspect-[16/10] w-full md:aspect-[16/8.5]">
              <Image
                alt="水のサジタリオのブランドグッズ一覧"
                className="object-cover"
                fill
                priority={false}
                sizes="(min-width: 1024px) 1120px, 100vw"
                src="/brand-goods-collection.png"
              />
            </div>
          </div>
          <div className="mt-8">
            <BrandGoods />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-32" id="stay">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="農泊 / 体験"
              title="農と祈りのスローステイへ。"
              lead="水のサジタリオが届けたいのは、野菜そのものだけではありません。射水の水、土、火、香りに深く触れながら、自分の呼吸と暮らしの速度を取り戻していく農泊体験へと、ブランドの世界観はゆるやかにつながっています。"
            />
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[minmax(0,1.1fr)_minmax(0,0.9fr)_auto]">
            {slowStayScenes.map((scene) => (
              <article
                key={scene.title}
                className={`scroll-reveal group overflow-hidden rounded-[1.6rem] border border-sagittarius-water/40 bg-white shadow-soft ${scene.className}`}
              >
                <div className={`relative ${scene.aspect} min-h-[18rem] w-full lg:h-full`}>
                  <Image
                    alt={scene.alt}
                    className="object-cover brightness-[0.8] contrast-[1.1] saturate-[1.05] transition duration-700 group-hover:scale-[1.03] group-hover:brightness-[0.74]"
                    fill
                    priority={false}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    src={scene.src}
                  />
                  <div className="absolute inset-0 bg-sagittarius-navy/14" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-gradient-to-t from-[#041a2d] via-[#082a4a]/92 to-transparent p-5 text-white md:p-6">
                    <p className="text-sm font-semibold tracking-[0.14em] text-sagittarius-water md:text-base [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">{scene.title}</p>
                    <p className="mt-2 text-[0.98rem] leading-7 text-white md:text-base [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">{scene.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="scroll-reveal rounded-[1.6rem] border border-sagittarius-water/40 bg-white p-7 shadow-soft md:p-8">
              <p className="text-sm font-semibold tracking-[0.16em] text-sagittarius-gold">滞在がひらくもの</p>
              <div className="mt-6 space-y-5 text-[0.98rem] leading-8 text-sagittarius-ink md:text-base">
                <p>
                  「農と祈りのスローステイ」は、射水市水戸田・青井谷を舞台にした、水のサジタリオの農泊ウェルネス体験です。
                  自然栽培の食、土の器、焚火、朝のコーヒー、バラやへちまの香り、地元の人との語らいを通して、
                  日常の感覚を静かに整えていきます。
                </p>
                <p>
                  食べること、つくること、祈ること、泊まることを切り離さず、
                  射水という土地の時間に身をゆだねる滞在そのものを一つの体験として設計しています。
                </p>
              </div>
            </div>
            <div className="scroll-reveal rounded-[1.6rem] border border-sagittarius-water/45 bg-[linear-gradient(180deg,rgba(4,26,45,0.99),rgba(8,42,74,0.98))] p-8 text-white shadow-soft md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sagittarius-water">Slow Stay</p>
              <h3 className="serif-heading mt-4 text-3xl font-semibold leading-[1.4] text-white md:text-4xl">
                野菜の背景にある、
                <br />
                土地の祈りまで味わう旅。
              </h3>
              <div className="mt-8 grid gap-3">
                <div className="rounded-[1.2rem] border border-white/14 bg-white/10 px-5 py-4">
                  <p className="text-base font-semibold text-sagittarius-water">朝の瞑想と畑の風景</p>
                  <p className="mt-2 text-[0.98rem] leading-7 text-white md:text-base">
                    山並みと棚田を前に座り、呼吸を整えて一日の感覚を静かにひらきます。
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-white/14 bg-white/10 px-5 py-4">
                  <p className="text-base font-semibold text-sagittarius-water">香りに触れる花摘みの時間</p>
                  <p className="mt-2 text-[0.98rem] leading-7 text-white md:text-base">
                    バラや植物の香りに手を添えながら、季節を持ち帰るように摘み取る手しごと。
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-white/14 bg-white/10 px-5 py-4">
                  <p className="text-base font-semibold text-sagittarius-water">火を囲む食卓と語らい</p>
                  <p className="mt-2 text-[0.98rem] leading-7 text-white md:text-base">
                    自然に育った野菜と火のぬくもり、焚火を囲む対話が、心身の速度をやわらかく戻します。
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold tracking-[0.16em] text-sagittarius-navy transition hover:-translate-y-0.5 hover:bg-sagittarius-water"
                  href="https://nou-to-inori-no-retreat.github.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  農と祈りのスローステイを見る
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-sagittarius-gold/80 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-sagittarius-gold hover:text-sagittarius-navy"
                  href="https://nou-to-inori-no-retreat.github.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  専用LPへ移動する
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-hero-radial px-5 py-24 text-white md:px-8 md:py-32" id="contact">
        <div className="absolute inset-0 star-field opacity-60" />
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-sagittarius-gold/45" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Logo className="justify-center" />
          <h2 className="serif-heading mt-10 text-4xl font-semibold leading-[1.35] md:text-6xl">
            私たちが届けるのは、
            <br />
            「まっすぐな未来」。
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
            古の星が導き、射水の水が潤し、大地の力が育む。
            「水のサジタリオ」は、私を整え、家族を育む、引き算の食卓を届ける現代の射手です。
            なにも足さない純粋な一矢を、あなたの家族へまっすぐ届けます。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-[0.18em] text-sagittarius-navy transition hover:-translate-y-0.5 hover:bg-sagittarius-water"
              href="mailto:info@example.com"
            >
              お問い合わせ
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-sagittarius-gold/80 px-8 py-4 text-sm font-semibold tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-sagittarius-gold hover:text-sagittarius-navy"
              href="mailto:info@example.com?subject=%E5%8F%96%E6%89%B1%E3%81%84%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
            >
              取扱いについて相談する
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-sagittarius-deep px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <p className="max-w-xl text-sm leading-7 text-white/62">
            水のサジタリオ / 射水のスローベジタブル。私を整え、家族を育む、引き算の食卓を、射水の水と土の記憶とともに静かに届けます。
          </p>
          <div className="flex gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/64">
            <a className="transition hover:text-sagittarius-water" href="#">
              インスタグラム
            </a>
            <a className="transition hover:text-sagittarius-water" href="#">
              エックス
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
