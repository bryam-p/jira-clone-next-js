import { Box } from "@mui/material"
import Head from "next/head"
import { Navbar } from "../ui"
import { Sidebar } from "../ui/Sidebar"

interface Props {
  title: string,
  children: React.ReactNode,
}

export const Layout = ({ title = 'OpenJira', children }: Props) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  )
}
