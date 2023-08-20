import { Button } from '@/components/Button'
import * as FileInput from '@/components/Form/FileInput'
import { Input } from '@/components/Form/Input'
import * as Select from '@/components/Form/Select'
import { Textarea } from '@/components/Form/TextArea'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { CountrySelect } from './CountrySelect'
import { SettingsTabs } from './SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-200">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>

            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button form="settings" type="submit" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex grid-cols-form flex-col gap-3 lg:grid">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 "
            >
              Name
            </label>

            <div className="flex grid-cols-2 flex-col gap-6 lg:grid">
              <Input.Root>
                <Input.Control
                  defaultValue="Yan"
                  id="firstName text-sm font-medium text-zinc-700 dark:text-zinc-400"
                />
              </Input.Root>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-400 lg:sr-only"
                >
                  Last Name
                </label>
                <Input.Root>
                  <Input.Control defaultValue="Lyra" id="lastName" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex grid-cols-2 flex-col gap-6 pt-5 lg:grid">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 "
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                defaultValue="yan.lyra@growth.sale"
                id="email"
                type="email"
              />
            </Input.Root>
          </div>

          <div className="flex grid-cols-2 flex-col gap-6 pt-5 lg:grid">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger>
                <FileInput.Control />
              </FileInput.Trigger>
            </FileInput.Root>
          </div>

          <div className="flex grid-cols-2 flex-col gap-6 pt-5 lg:grid">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 "
            >
              Role
            </label>

            <Input.Root>
              <Input.Control defaultValue="Sr. fullstack developer" id="role" />
            </Input.Root>
          </div>

          <div className="flex grid-cols-2 flex-col gap-6 pt-5 lg:grid">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 "
            >
              Country
            </label>

            <CountrySelect />
          </div>

          <div className="flex grid-cols-2 flex-col gap-6 pt-5 lg:grid">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400 "
            >
              Timezone
            </label>

            <Select.Root name="timezone">
              <Select.Trigger>
                <Select.Value placeholder="Select your timezone..." />
              </Select.Trigger>

              <Select.Content>
                <Select.Item value="utc-3">
                  <Select.ItemText>
                    Pacific Standard Time (PST)
                    <span className="text-sm text-zinc-500">UTC 08:00</span>
                  </Select.ItemText>
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="flex grid-cols-2 flex-col gap-6 pt-5 lg:grid">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="flex flex-col gap-3">
              <div className="grid gap-3 lg:grid-cols-2">
                <Select.Root defaultValue="normal">
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>

                  <Select.Content>
                    <Select.Item value="normal">
                      <Select.ItemText>Normal text</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="md">
                      <Select.ItemText>Markdown</Select.ItemText>
                    </Select.Item>
                  </Select.Content>
                </Select.Root>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Italic className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Link className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <List className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                name="bio"
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex grid-cols-2 flex-col gap-6 pt-5 lg:grid">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-400"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger>
                <FileInput.Control id="portfolio" multiple />
              </FileInput.Trigger>
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 py-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
