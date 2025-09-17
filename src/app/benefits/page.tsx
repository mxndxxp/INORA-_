
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import { Check, Dot } from 'lucide-react';
import React from 'react';

const caseStudies = [
    {
        category: "Diabetes",
        expert: "Prof. Kuwata Keijiroo, Doctor of Medicine, Japan",
        quote: "After drinking ionized water for one month, 15 diabetic patients were tested. The sugar in their blood and urine dropped from as high as 300 mg/l to normal ranges. Even after meals, blood sugar levels remained normal and sugar in the urine completely disappeared."
    },
    {
        category: "High Blood Pressure",
        expert: "Pro. Kuninaka Hironage, Head of Kuninaka Hospital",
        quote: "By drinking ionized water for a period of 2 to 3 months, blood pressure should slowly drop, because the ionized water is a good solvent, which dissolves the cholesterol in the blood vessels."
    },
    {
        category: "Gynecological Conditions",
        expert: "Prof. Watanabe Ifao, Watanabe Hospital, Japan",
        quote: "When given ionized water to pre-eclamptic toxemia cases, the results are very significant... women who consumed ionized water tend to deliver healthier babies with stronger muscles. A survey report carried out on babies in this group has intelligence above average."
    },
    {
        category: "Heart Disease",
        expert: "Prof. Kuwata Keijiroo, Doctor of Medicine, Japan",
        quote: "A 35-year-old male with vascular heart disease, whose condition had deteriorated for 5 years despite major surgery, was expected not to live much longer. After starting ionized water, his illness responded well and he is now on the road to recovery."
    },
    {
        category: "Eczema",
        expert: "Prof. Tamura Tatsuji, Keifuku Rehabilitation Center, Japan",
        quote: "A 70-year-old patient suffered 10 years of chronic eczema that couldn't be cured. After consuming ionized water and using acidic water to bathe the affected areas, the vesicles dried up in 2 weeks and the eczema completely cleared after 1.5 months without relapse."
    },
    {
        category: "Allergy",
        expert: "Prof. Kuninaka Hironaga, Head of Kuninaka-Hospital, Japan",
        quote: "I discovered that most allergies are due to acidification of the body. The ionic calcium in ionized water not only enhances heart and liver function but also promotes natural healing power and increases resistance to allergy."
    },
    {
        category: "Digestive System Problems",
        expert: "Prof. Kogure Keizou, Kogure Clinic of Juntendo Hospital, Japan",
        quote: "For those with low gastric juice (achlorhydria), ionized water stimulates the stomach to secrete more. For those with high gastric juice (hyperchlorhydria), it neutralizes the excess. This enhances digestion and absorption of minerals."
    },
    {
        category: "Cancer",
        expert: "Korean Scientific Reports",
        quote: "After benign tumor cells were injected into mice, the group given alkaline ionized water showed reduced tumor growth and smaller tumor size compared to the control group."
    },
    {
        category: "Constipation & Diarrhea",
        expert: "Dr. Testsuji Hokudou, Director of Gastroenterology, National Ohkura Hospital",
        quote: "In double-blind clinical tests, alkaline ionized water showed significantly more effective results against chronic diarrhea than pure water, with an effective rate of 94.1%. In separate tests on 163 volunteers with stomach pain, the overall improvement rate for constipation was also significantly higher for those who received alkaline ionized water."
    },
    {
        category: "Osteoporosis",
        expert: "Kyoto University School of Medicine",
        quote: "We conducted experiments by feeding rats different diets and giving them tap water, calcium lactate solution, and alkaline ionized water. The rate of bone formation (osteogenesis) was highest in the alkaline ionized water group, especially when dietary calcium was low."
    }
];


const alkalineUses = [
    { ph: "pH 8.5", use: "For beginners", description: "Drink this level for one to two weeks before progressing to higher levels. Also good for mixing with powdered milk." },
    { ph: "pH 9.0", use: "Daily Drinking", description: "The next step after acclimatizing to pH 8.5. Continue for one to two weeks." },
    { ph: "pH 9.5", use: "Advanced Drinking & Cooking", description: "The level most adults choose for daily drinking. Enhances the flavor of tea and coffee. Good for hangover relief." },
    { ph: "pH 10.0+", use: "Cleaning & Food Prep", description: "Strong cleaning power. Use to wash vegetables and fruits to remove oil-based pesticides, clean cutting boards, and remove tough stains from dishes." },
];

const acidicUses = [
    { ph: "pH 5.5", use: "Facial Toner & Hair Care", description: "Excellent for cleansing and as an astringent to tighten pores. Restores shine to hair and softens skin. Good for gargling and brushing teeth." },
    { ph: "pH 5.0", use: "Bathing & Sensitive Skin", description: "Ideal for bathing infants and those with sensitive skin. Can help relieve sunburn and skin problems like psoriasis and eczema." },
    { ph: "pH 4.5", use: "Cleaning & Humidifier", description: "Good for removing sediment from teapots and cups. Use this pH in your humidifier to prevent mineral buildup." },
    { ph: "pH < 4.0", use: "Disinfecting & Sterilizing", description: "Strong acidic water has excellent disinfecting powers. Use it to sanitize kitchen utensils, countertops, toothbrushes, and clean cuts or scrapes." },
];

const roComparison = [
    { feature: "Minerals", ro: "Removes essential minerals like calcium and magnesium.", alkaline: "Retains and adds beneficial minerals.", advantage: "alkaline" },
    { feature: "pH Level", ro: "Makes water acidic (low pH).", alkaline: "Raises pH, making water alkaline.", advantage: "alkaline" },
    { feature: "Wastewater", ro: "Highly wasteful; up to 80% of water is discarded.", alkaline: "Minimal to no wastewater produced.", advantage: "alkaline" },
    { feature: "Hydration", ro: "Standard hydration.", alkaline: "Superior hydration due to smaller micro-clustered molecules.", advantage: "alkaline" },
    { feature: "Health Benefits", ro: "Provides purified but 'empty' demineralized water.", alkaline: "Provides antioxidants, boosts immunity, and helps balance body pH.", advantage: "alkaline" },
    { feature: "Environmental Impact", ro: "High water wastage is not eco-friendly.", alkaline: "Eco-friendly with little to no water loss.", advantage: "alkaline" },
];


export default function BenefitsPage() {
    return (
        <div className="bg-background">
            <section className="py-24 md:py-32 lg:py-40">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Benefits of Ionized Water
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            Discover the profound impact that alkaline ionized water can have on your health, hydration, and overall well-being.
                        </p>
                    </div>
                </div>
            </section>
            
            <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/30">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Balance Your Body, Boost Your Health</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Most modern diets and lifestyles lead to an over-acidic state in our bodies. To compensate, our body may draw essential minerals like calcium from our bones, or convert acidic waste into fat for storage. Drinking alkaline ionized water is the most efficient way to neutralize this acidity, restore your body's natural pH balance, and support its natural detoxification processes. It's not just water; it's a cornerstone of a healthier, more balanced life.
                        </p>
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-12 md:py-20 lg:py-24">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">RO vs. Alkaline Ionized Water</h2>
                        <p className="mt-2 mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                            While Reverse Osmosis (RO) purifies water, it also strips it of essential minerals, making it acidic. See how ionized water is different.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <Card>
                             <table className="w-full">
                                <thead className="bg-muted/50">
                                    <tr>
                                        <th className="p-4 text-left font-semibold">Feature</th>
                                        <th className="p-4 text-left font-semibold">RO (Reverse Osmosis) Water</th>
                                        <th className="p-4 text-left font-semibold">Alkaline Ionized Water</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roComparison.map((item, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="p-4 font-medium">{item.feature}</td>
                                            <td className={`p-4 ${item.advantage === 'ro' ? 'text-green-600' : 'text-red-600'}`}>{item.ro}</td>
                                            <td className={`p-4 ${item.advantage === 'alkaline' ? 'text-green-600' : 'text-red-600'}`}>{item.alkaline}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-12 md:py-20 lg:py-24 bg-secondary/30">
                 <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Uses of Ionized Water</h2>
                        <p className="mt-2 mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                            A water ionizer is a versatile appliance. The different pH levels it produces have a wide range of uses around your home.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>Alkaline Water Uses (for Drinking & Cleaning)</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {alkalineUses.map((item) => (
                                     <div key={item.ph}>
                                        <h4 className="font-bold">{item.ph}: {item.use}</h4>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Acidic Water Uses (for Skin, Hair & Disinfecting)</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {acidicUses.map((item) => (
                                     <div key={item.ph}>
                                        <h4 className="font-bold">{item.ph}: {item.use}</h4>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                 </div>
            </AnimatedSection>

            <AnimatedSection className="py-12 md:py-20 lg:py-24">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Medical Case Studies & Reports</h2>
                        <p className="mt-2 mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                            For decades, medical professionals in Japan and Korea have studied the effects of alkaline ionized water. Here are some of their findings.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <Card key={index} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>{study.category}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="italic text-muted-foreground">"{study.quote}"</p>
                                </CardContent>
                                <div className="p-6 pt-0 mt-auto">
                                   <p className="text-sm font-semibold text-right">- {study.expert}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}
