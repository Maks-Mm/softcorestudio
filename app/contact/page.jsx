export default function Contact() {
  return (
    <section className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <textarea
          placeholder="Message"
          className="border p-2 rounded"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-6 py-3 bg-black text-white rounded-xl"
        >
          Send Request
        </button>
      </form>
    </section>
  );
}
