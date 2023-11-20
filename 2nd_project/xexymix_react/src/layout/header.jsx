import { Gnb } from "../components/gnb";
import { TopBanner } from "../components/top_banner";

export function Header() {
    return <header id="header">
        <TopBanner />
        <Gnb />
    </header>
}