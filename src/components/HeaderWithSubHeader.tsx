
type HeaderWithSubHeaderProps = {
    header: string,
    subheader: string
}

const HeaderWithSubHeader = ({ header, subheader }: HeaderWithSubHeaderProps) => {
    return (
        <div className="pt-2">
            <header className="text-center">
                <div className="text-2xl font-bold text-gray-700">{header}</div>
                <p className="mt-2 text-sm text-gray-600">{subheader}</p>
            </header>
        </div>
    );
};

export default HeaderWithSubHeader;