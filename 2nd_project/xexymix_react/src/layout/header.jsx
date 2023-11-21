import { DropdownMenu } from "../components/dropdown_menu";
import { Gnb } from "../components/gnb";
import { TopBanner } from "../components/top_banner";

export function Header() {
    return <header id="header">
        <TopBanner />
        <Gnb />
        <DropdownMenu />
    </header>
}