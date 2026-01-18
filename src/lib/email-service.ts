export interface EmailService {
    subscribe(email: string, source: string): Promise<boolean>;
}

export class ConsoleEmailService implements EmailService {
    async subscribe(email: string, source: string): Promise<boolean> {
        console.log(`[EmailService] Subscribing ${email} from source: ${source}`);
        return new Promise((resolve) => setTimeout(() => resolve(true), 500));
    }
}

// Future implementation for ConvertKit/Beehiiv
// export class ConvertKitService implements EmailService { ... }

// Singleton instance
export const emailService = new ConsoleEmailService();
