export default function Page() {
  return (
    <div>
      <h1>Titulo...</h1>
      <form action={"qq coisa"}>
        <input name="name" required />
        <input type="email" name="email" required />
        <textarea
          name="
    message"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
