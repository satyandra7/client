import Image from "next/image"
import Link from "next/link"


const Button = ({type, title, href = '/', icon, variant, full}) => {
  return (
    
    <Link href= {href} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}>
    {icon && <Image src={icon} alt={title} width={24} height={24} />}
    <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
</Link>
  )
}

export default Button