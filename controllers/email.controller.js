import sendEmail from "../helpers/mailer.js";

const emailController = {
    request: async (req, res) => {
        console.log(req.body);
        const { to, subject, departament, requestBy, caseDescription, phoneNumber, address, email, job } = req.body;
        const date = new Date().toLocaleString('en-GB', {
            hour12: false,
        });;

        try {
            await sendEmail('Forensic Pentestic System <fps@gmail.com>', to, subject, 'request', {
                date,
                departament,
                requestBy,
                caseDescription,
                phoneNumber,
                address,
                email,
                job
            })

            return res.status(200).send({
                message: 'send email'
            })
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                message: 'server error'
            })
        }
    }
}

export default emailController;