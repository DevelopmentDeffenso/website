import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import Stats from '../components/ui/Stats';
import Philosophy from '../components/ui/Philosophy';
import Programs from '../components/ui/Programs';
import Feedback from '../components/ui/Feedback';
import FAQSection from '../components/ui/faq';
import Footer from '../components/layout/Footer';

export default function Dashboard() {
    return (
        <div className="bg-[#050505]">
            <Navbar />
            <Hero />
            <Stats />
            <Philosophy />
            <Programs />
            <FAQSection />
            <Feedback />
            <Footer />
        </div>
    );
}
