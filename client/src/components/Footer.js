import { CDBBox } from "cdbreact";

export const Footer = () => {
    return (
        <CDBBox>
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="right"
                className="mx-auto py-4 flex-wrap"
                style={{ width: '100%', }}
            >
                <CDBBox display="flex" alignItems="center">
                    <small className="ml-2 px-2 mb-1">
                        &copy; Golden Sport Center, 2022. All rights reserved.
                    </small>
                </CDBBox>
            </CDBBox>
        </CDBBox>
    );
};