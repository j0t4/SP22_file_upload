
import { useEffect, useState } from 'react';
import { sp } from '@pnp/sp';
import { Web } from '@pnp/sp/webs';
import '@pnp/sp/webs';
import '@pnp/sp/site-users/web';

type ProfileType = {
    Id: number;
    IsHiddenInUI: boolean;
    LoginName: string;
    Title: string;
    PrincipalType: number;
    Email: string;
    IsSiteAdmin: boolean;
};

type UseSPPnPResult = {
    userProfile: ProfileType | null;
};

const useSPPnP = (): UseSPPnPResult => {
    const [userProfile, setUserProfile] = useState<ProfileType | null>(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const currentUrl: string = window.location.href;
                let urlSet: string;

                if (currentUrl.includes('/dev/')) {
                    urlSet = currentUrl.split('/dev/')[0];
                } else if (currentUrl.includes('/dev/')) {
                    urlSet = currentUrl.split('/dev/')[0];
                } else {
                    throw new Error('Invalid URL');
                }

                const baseURL = urlSet;

                Web(baseURL);
                sp.setup({
                    sp: {
                        baseUrl: baseURL
                    }
                });
                const user = await sp.web.currentUser();
                setUserProfile(user);
            } catch (error) {
                console.log(error);
            }
        };
        fetch();
    }, []);

    return { userProfile };
};

export default useSPPnP;
