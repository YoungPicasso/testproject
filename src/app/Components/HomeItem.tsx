export default function HomeItem(props: {
  backgroundcolor: string;
  mainInhoud: string;
  extraInhoud: string;
}) {
  const defaultClasses = "w-60 h-60 text-4xl";
  const combinedClasses = `${defaultClasses} ${props.backgroundcolor}`;

  return (
    <div className={combinedClasses}>
      <p className="mx-8 mt-6 font-bold text-base text-blue-800">
        {props.mainInhoud}
      </p>
      <p className="mx-8  text-sm text-blue-800">{props.extraInhoud}</p>
    </div>
  );
}
