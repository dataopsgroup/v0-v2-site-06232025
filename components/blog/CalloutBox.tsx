import { Target, Lightbulb, Info } from "lucide-react"

interface CalloutBoxProps {
  title: string
  description: string
  icon?: "target" | "lightbulb" | "info"
  variant?: "saffron" | "blue"
}

const iconMap = {
  target: Target,
  lightbulb: Lightbulb,
  info: Info,
}

export default function CalloutBox({ title, description, icon = "info", variant = "saffron" }: CalloutBoxProps) {
  const IconComponent = iconMap[icon]

  const boxClasses = {
    saffron: "bg-yellow-50 border-yellow-400 text-gray-900",
    blue: "bg-blue-50 border-blue-400 text-gray-900",
  }

  const iconClasses = {
    saffron: "text-yellow-600",
    blue: "text-blue-600",
  }

  return (
    <div className={`flex items-start gap-4 p-4 border-l-4 rounded-md shadow-sm my-8 ${boxClasses[variant]}`}>
      {IconComponent && <IconComponent className={`w-6 h-6 flex-shrink-0 ${iconClasses[variant]}`} />}
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  )
}
