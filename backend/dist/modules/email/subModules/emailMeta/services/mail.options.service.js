"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recipient_service_1 = __importDefault(require("../../recipient/services/recipient.service"));
const email_meta_service_1 = __importDefault(require("./email.meta.service"));
class SendEmailToOptions {
    constructor() {
        this.mailOptions = {
            from: "",
            to: "",
            subject: "",
            html: "",
            css: ""
        };
    }
    _getToOptInMailOptions(recipients) {
        let to = "";
        if (recipients && recipients.length > 0) {
            to = recipients.map(recipient => recipient.recipientEmail).join(',');
        }
        return to;
    }
    _updateToOptInMailOptions(recipients) {
        this.mailOptions.to = this._getToOptInMailOptions(recipients);
    }
    _updateRecipients(emailMetaId) {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedRecipientsRes = yield recipient_service_1.default.getRecipients({ emailMetaId });
            this._updateToOptInMailOptions(fetchedRecipientsRes);
        });
    }
    _getSubject(emailMeta) {
        let subject = "";
        if (emailMeta && emailMeta.email) {
            subject = emailMeta.subject;
        }
        return subject;
    }
    _getHtml(emailMeta) {
        let html = "";
        if (emailMeta && emailMeta.email) {
            html = emailMeta.email.html;
        }
        return html;
    }
    _getCss(emailMeta) {
        let css = "";
        if (emailMeta && emailMeta.email) {
            css = emailMeta.email.css;
        }
        return css;
    }
    _updateEmailConfiguration(emailMeta) {
        this.mailOptions.subject = this._getSubject(emailMeta);
        this.mailOptions.html = this._getHtml(emailMeta);
        this.mailOptions.css = this._getCss(emailMeta);
    }
    _updateSubjectAndHtml(emailMetaId) {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedEmail = yield email_meta_service_1.default.getEmailByMetaId({ emailMetaId });
            this._updateEmailConfiguration(fetchedEmail);
        });
    }
    _getMailOptions(emailMetaId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._updateRecipients(emailMetaId);
            yield this._updateSubjectAndHtml(emailMetaId);
            return this.mailOptions;
        });
    }
}
exports.default = new SendEmailToOptions();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbC5vcHRpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VtYWlsL3N1Yk1vZHVsZXMvZW1haWxNZXRhL3NlcnZpY2VzL21haWwub3B0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUdBQTBFO0FBQzFFLDhFQUFvRDtBQUVwRCxNQUFNLGtCQUFrQjtJQUF4QjtRQUVFLGdCQUFXLEdBQUc7WUFDWixJQUFJLEVBQUUsRUFBRTtZQUNSLEVBQUUsRUFBRSxFQUFFO1lBQ04sT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQztJQTRESixDQUFDO0lBMURDLHNCQUFzQixDQUFDLFVBQW1DO1FBQ3hELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLEVBQUUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0RTtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELHlCQUF5QixDQUFDLFVBQW1DO1FBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUssaUJBQWlCLENBQUMsV0FBbUI7O1lBQ3pDLElBQUksb0JBQW9CLEdBQTRCLE1BQU0sMkJBQWdCLENBQUMsYUFBYSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUMxRyxJQUFJLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFRCxXQUFXLENBQUMsU0FBNkM7UUFDdkQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDN0I7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLFNBQTZDO1FBQ3BELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZDO1FBQ25ELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQseUJBQXlCLENBQUMsU0FBNkM7UUFDckUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVLLHFCQUFxQixDQUFDLFdBQW1COztZQUM3QyxJQUFJLFlBQVksR0FBRyxNQUFNLDRCQUFnQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLFdBQW1COztZQUN2QyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxQyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUM3QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQztLQUFBO0NBRUY7QUFFRCxrQkFBZSxJQUFJLGtCQUFrQixFQUFFLENBQUMifQ==