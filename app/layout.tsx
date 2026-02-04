import "./globals.css";
import RelayLayout from "@/components/relayLayout";

export const metadata = {
    title: "Relay",
    description: "Signal → Voice → Qualification",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <RelayLayout>{children}</RelayLayout>
        </body>
        </html>
    );
}
