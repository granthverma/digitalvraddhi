import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using Digital Vraddhi's services (including web development, app development, and digital marketing), you agree to be bound by these Terms. If you disagree, please refrain from using our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Services Overview</h2>
        <p className="mb-4">
          Digital Vraddhi provides:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Custom website and application development</li>
          <li>Digital marketing services (SEO, PPC, social media)</li>
          <li>Consulting and strategy services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Client Responsibilities</h2>
        <p className="mb-4">
          As a client, you agree to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide accurate project requirements and materials</li>
          <li>Make timely payments as per agreed schedules</li>
          <li>Provide feedback within reasonable timeframes</li>
          <li>Obtain necessary licenses for provided content</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
        <p className="mb-4">
          Unless otherwise agreed in writing:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Final deliverables become client property upon full payment</li>
          <li>We retain rights to reusable code components</li>
          <li>Client warrants they have rights to all provided materials</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Payments and Fees</h2>
        <p className="mb-4">
          Our payment terms include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>50% deposit required to begin development projects</li>
          <li>Monthly billing for ongoing marketing services</li>
          <li>Late payments incur 1.5% monthly interest</li>
          <li>All prices in USD unless otherwise specified</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Project Timelines</h2>
        <p className="mb-4">
          Development projects follow this process:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>Requirement gathering (1-2 weeks)</li>
          <li>Design approval (2-3 weeks)</li>
          <li>Development phase (4-12 weeks)</li>
          <li>Testing and revisions (2-3 weeks)</li>
        </ol>
        <p className="mb-4">
          Delays in client feedback or content provision will extend timelines proportionally.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Revisions and Changes</h2>
        <p className="mb-4">
          Our policy includes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>2 rounds of revisions included in initial quotes</li>
          <li>Additional revisions billed at $95/hour</li>
          <li>Scope changes require written change orders</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Confidentiality</h2>
        <p className="mb-4">
          We agree to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Treat all client information as confidential</li>
          <li>Not disclose proprietary information to third parties</li>
          <li>Sign NDAs upon client request</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Termination</h2>
        <p className="mb-4">
          Either party may terminate with 30 days written notice. Termination fees apply for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Work completed but not yet billed</li>
          <li>Non-refundable third-party costs</li>
          <li>Early termination of fixed-term contracts</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">10. Limitations of Liability</h2>
        <p className="mb-4">
          Digital Vraddhi shall not be liable for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Indirect or consequential damages</li>
          <li>Third-party platform changes affecting deliverables</li>
          <li>Client-provided inaccurate information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">11. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to conflict of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">12. Contact Information</h2>
        <p className="mb-4">
          For questions about these Terms:
        </p>
        <p>
          <strong>Email:</strong>digitalvraddhi@gmail.com<br />
          <strong>Address:</strong> [India🇮🇳]
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

export default Terms;