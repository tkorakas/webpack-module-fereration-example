export default function Root(props) {
  return (
    <section>
      {props.name} hello!
      <button
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent("hello", { detail: { name: "Thanos" } })
          );
        }}
      >
        Custom event
      </button>
    </section>
  );
}
