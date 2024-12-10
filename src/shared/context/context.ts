import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { MangosContextType } from "./types";
import { User } from "@/entities/User/types";
import { Organization } from "@/entities/Organization/types";
import { Project } from "@/entities/Project/types";

export const MangosContext = createContext<{
    data: MangosContextType;
    setData: Dispatch<SetStateAction<MangosContextType>>;
} | null>(null);

// user context, organization context, project context
export function useUserContext() {
    const context = useContext(MangosContext);

    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }

    const { data, setData } = context;
    return {
        user: data.user,
        setUser: (user: User) => setData({...data, user }),
    };
}

export function useOrganizationContext() {
    const context = useContext(MangosContext);

    if (!context) {
        throw new Error("useOrganizationContext must be used within a OrganizationProvider");
    }

    const { data, setData } = context;
    return {
        organization: data.organization,
        setOrganization: (organization: Organization) => setData({...data, organization }),
    };
}

export function useProjectContext() {
    const context = useContext(MangosContext);

    if (!context) {
        throw new Error("useProjectContext must be used within a ProjectProvider");
    }
    
    const { data, setData } = context;
    return {
        project: data.project,
        setProject: (project: Project) => setData({...data, project }),
    };
}