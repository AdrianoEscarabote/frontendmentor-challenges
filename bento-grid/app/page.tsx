import SocialMedia from "./_components/socialMedia"
import MaintainSchedule from "./_components/maintainSchedule"
import CreateQuicker from "./_components/createQuicker"
import GrowFollowers from "./_components/growFollowers"
import ManageAccounts from "./_components/manageAccounts"
import ScheduleSocialMedia from "./_components/scheduleSocialMedia"
import WriteUsingAI from "./_components/writeUsingAI"
import FasterGrowth from "./_components/fasterGrowth"

export default function Home() {
  return (
    <main className="my-0 min-w-[1029px] xl:my-[82px]">
      <div className="grid-container grid gap-8 p-5 xl:p-0">
        <div style={{ gridArea: "item1" }}>
          <CreateQuicker />
        </div>
        <div style={{ gridArea: "item2" }}>
          <SocialMedia />
        </div>
        <div style={{ gridArea: "item3" }}>
          <ScheduleSocialMedia />
        </div>
        <div style={{ gridArea: "item4" }}>
          <WriteUsingAI />
        </div>
        <div style={{ gridArea: "item5" }}>
          <ManageAccounts />
        </div>
        <div style={{ gridArea: "item6" }}>
          <MaintainSchedule />
        </div>
        <div style={{ gridArea: "item7" }}>
          <FasterGrowth />
        </div>
        <div style={{ gridArea: "item8" }}>
          <GrowFollowers />
        </div>
      </div>
    </main>
  )
}
