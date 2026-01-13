import { getSchemaOrgData } from "@/lib/seo"
import { Metadata } from 'next'
import { getLocalizedMetadata } from "@/lib/seo"

export const metadata: Metadata = getLocalizedMetadata('ro');

export default function RomanianPage() {
  const schemaData = getSchemaOrgData('ro');
  
  return (
    <div className="min-h-screen bg-stone-100 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-teal-700 mb-6">
          Ioana Web Studio
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Site-uri Portfolio pentru Mărcile Mici & Creatori
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Ajutând mărcile mici și creatorii să se remarce online cu site-uri portfolio simple, elegante și orientate spre creștere. Design gândit, rapid și fiabil.
        </p>
        
        <div className="mt-12 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-serif font-bold text-teal-700 mb-4">Versiune Română în Dezvoltare</h2>
          <p className="text-gray-700 mb-6">
            Versiunea în limba română a site-ului nostru este în curs de pregătire. Pentru mai multe informații, vă invităm să vizitați versiunea în limba engleză.
          </p>
          <p className="text-gray-600">
            Email: <a href="mailto:hello@ioanawebstudio.com" className="text-teal-600 hover:underline">hello@ioanawebstudio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
