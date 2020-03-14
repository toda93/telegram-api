import HttpClient from '@azteam/http-client';

class TelegramAPI {
    constructor(token) {
        this.client = new HttpClient();
        this.endpoint = `https://api.telegram.org/bot${token}`;
    }

    async initHook(callbackURL) {
        return await this.client.post(this.endpoint + '/setWebhook', {
            url: callbackURL,
        });
    }

    async sendInboxMessage(telegram_id, message) {
        if(Array.isArray(message)){
            message = message.join('\n');
        }

        this.client.post(this.endpoint + '/sendMessage', {
            chat_id: telegram_id,
            text: message,
        });
        return null;
    }
}

export default TelegramAPI;