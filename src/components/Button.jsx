export default function Button({ styles, children, onClick }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none hover:opacity-90 ${styles} rounded-xl`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
