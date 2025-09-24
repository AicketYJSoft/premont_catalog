import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Droplet, Timer, Leaf, Hand, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * 프레망 브랜드 소개서의 로션 한 페이지 구성
 * - 아이콘 + 키 메시지 요약
 * - Tailwind + shadcn/ui + framer-motion
 * - 단일 파일로 어디든 임포트해 사용 가능
 */
export default function PremontLotionIntroPage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "저자극 데일리 보습",
      desc:
        "신생아부터 안심 포뮬러. 100% 자연 유래 보습 성분으로 연약한 피부를 편안하게.",
    },
    {
      icon: Droplet,
      title: "빠른 흡수·산뜻 마무리",
      desc:
        "가벼운 로션 제형이 끈적임 없이 스며들어 바쁜 순간에도 수시로 덧바르기 좋아요.",
    },
    {
      icon: Timer,
      title: "온종일 촉촉",
      desc:
        "자연 유래 오일 보습막이 건조·가려움·거칠어짐을 예방, 유수분 밸런스 케어.",
    },
    {
      icon: Leaf,
      title: "순한 자연의 향",
      desc:
        "합성향료 무첨가. 식물성 추출물의 은은하고 편안한 향으로 사용 순간까지 기분 좋게.",
    },
    {
      icon: Hand,
      title: "사용 방법",
      desc:
        "목욕 후/건조할 때 적당량을 얼굴·몸에 부드럽게 펴 발라 흡수. 필요 시 수시로 사용.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span>Premont Face & Body Lotion</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            프레망 로션 – 산뜻한 데일리 보습 로션
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground">
            목욕 후 보송보송한 아기 피부, 이제 산뜻한 보습으로 하루 종일 촉촉하게!<br className="hidden sm:block" />
            매일 사용하는 전신 보습으로 아기 피부를 촉촉하고 부드럽게.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">#데일리보습</Badge>
            <Badge variant="secondary">#산뜻흡수</Badge>
          </div>

          <div className="text-sm sm:text-base text-muted-foreground">
            <b>피부 타입</b>: 신생아부터 모든 피부(민감성 포함) &nbsp;|&nbsp; <b>향</b>: 은은한 자연 향(합성향료 무첨가) &nbsp;|&nbsp; <b>제형</b>: 가볍고 산뜻한 로션 타입
          </div>
        </motion.div>

        {/* 특장점 그리드 */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 * idx }}
            >
              <Card className="h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-muted/50 flex items-center justify-center">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold leading-snug">{f.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 용량/가격 & CTA */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Badge className="rounded-xl px-3 py-1" variant="outline">용량 350ml</Badge>
            <Badge className="rounded-xl px-3 py-1" variant="outline">정가 59,000원</Badge>
          </div>

          <div className="text-xs text-muted-foreground">
            ※ 신생아 사용 전에는 반드시 소량으로 패치 테스트 후 전신에 사용해 주세요.
          </div>
        </div>

        {/* 하단 문구 */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            합성향료·불필요한 성분 배제, 매일 쓰는 만큼 기본을 단단히.
          </p>
          <Button className="rounded-2xl">자세히 보기</Button>
        </div>
      </div>
    </div>
  );
}
