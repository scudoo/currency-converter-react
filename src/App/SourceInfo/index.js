import { SourceInfoSection } from "./styled";

const SourceInfo = ({ apiResponse }) => (
    <SourceInfoSection error={apiResponse.status === "error"}>
        Kursy pochodzą z baz danych Komisji Europejskiej z dnia <strong>{apiResponse.rateDate}</strong>
    </SourceInfoSection>
);

export default SourceInfo;