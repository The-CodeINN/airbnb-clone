"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches found",
  subtitle = "Try changing some of your filters",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className='
      flex
      flex-col
      h-[60vh]
      gap-2
      justify-center
      items-center
      '
    >
      <Heading title={title} subtitle={subtitle} center />
      <div className='w-48 mt-4'>
        {showReset && (
          <Button
            outline
            label='Remove all filters'
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
