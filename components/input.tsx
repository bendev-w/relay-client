export default function Input({
                                  name,
                                  label,
                              }: {
    name: string;
    label: string;
}) {
    return (
        <div className="space-y-1.5">
            <label className="text-sm text-neutral-700">{label}</label>

            <input
                name={name}
                required
                className="
          w-full rounded-md px-3 py-2 text-sm
          bg-white text-black
          border border-neutral-300
          placeholder-neutral-400

          focus:outline-none
          focus:ring-2 focus:ring-black/20
          focus:border-black/40
        "
            />
        </div>
    );
}
