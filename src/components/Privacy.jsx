import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Privacy() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-6 text-gray-600">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="mb-4">
            Digital Vraddhi  is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital marketing, web development, and app development services.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Personal Information:</strong> Name, email, phone number, company details when you contact us for services</li>
            <li><strong>Project Information:</strong> Requirements documents, design assets, and content you provide for web/app development</li>
            <li><strong>Marketing Data:</strong> Campaign performance metrics, audience analytics for our digital marketing services</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information when you visit our website</li>
            <li><strong>Payment Information:</strong> Billing details for service payments (processed through secure third-party processors)</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide and manage our services (web development, app development, digital marketing)</li>
            <li>Communicate with you about projects, services, and promotions</li>
            <li>Improve and optimize our services and website</li>
            <li>Run and measure digital marketing campaigns for clients</li>
            <li>Process payments and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Data Sharing and Disclosure</h2>
          <p className="mb-4">
            We may share information with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Service Providers:</strong> Hosting partners, analytics tools, and marketing platforms necessary for our services</li>
            <li><strong>Clients:</strong> For digital marketing services, we share campaign data with clients as part of our reporting</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
          </ul>
          <p className="mb-4">
            We never sell your personal information to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Encryption of sensitive data</li>
            <li>Secure development practices for web and app projects</li>
            <li>Regular security audits</li>
            <li>Access controls to client data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Client Project Data</h2>
          <p className="mb-4">
            For web and app development projects:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>We treat all client materials as confidential</li>
            <li>Source code and designs remain client property</li>
            <li>We retain development files only as needed for the project</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. Cookies and Tracking</h2>
          <p className="mb-4">
            We use cookies and similar technologies for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Website functionality</li>
            <li>Analytics to improve our services</li>
            <li>Marketing campaign measurement (for our digital marketing services)</li>
          </ul>
          <p className="mb-4">
            You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">8. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have rights to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict processing of your data</li>
            <li>Receive your data in a portable format</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us at privacy@digitalvraddhi.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">9. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically. We'll notify you of significant changes through our website or email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
          <p className="mb-4">
            For questions about this Privacy Policy or our data practices:
          </p>
          <p>
            <strong>Email:</strong> privacy@digitalvraddhi.com<br />
            <strong>Address:</strong> [India 🇮🇳]
          </p>
        </section>

        <div className="mt-8 border-t pt-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <FaHome className="text-lg" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    );
}

export default Privacy;