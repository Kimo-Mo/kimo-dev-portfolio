const MyInfo = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="size-8 p-2 bg-accent rounded-full *:size-full">
        {icon}
      </span>
      <span className="italic font-bold">{text}</span>
    </div>
  );
};

export { MyInfo };
